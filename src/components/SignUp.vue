<template>
  <div id="sign-up">
    <h1>Create a new account</h1>
    <form v-if="!successSignUp">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Juan Cardona"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Account Type</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="account_type"
        >
          <option>Admin</option>
          <option>Manager</option>
        </select>
      </div>
      <button class="btn btn-primary" @click="e => signUp(e)">Sign Up</button>
    </form>
    <form v-if="successSignUp">
      <h2>Confirm</h2>
      <input type="password" v-model="code" />
      <button @click="e => verify(e)">Verify</button>
    </form>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "SignUp",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      account_type: "",
      code: "",
      successSignUp: false
    };
  },
  methods: {
    async signUp(e) {
      e.preventDefault();
      try {
        await Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            name: this.name,
            email: this.email,
            "custom:account_type": this.account_type
          }
        });
        this.successSignUp = true;
      } catch (error) {
        console.log("error signing up:", error);
      }
    },
    async verify(e) {
      e.preventDefault();
      try {
        await Auth.confirmSignUp(this.email, this.code);
        this.$router.go();
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    }
  }
};
</script>
