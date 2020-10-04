<template>
  <div id="login">
    <div class="cotainer-fluid" v-if="!forgotPass && !recovery">
      <h1>Sign In</h1>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@company.com"
        v-model="email"
      />
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="password" />
      <button class="btn btn-primary" @click="signIn">Log In</button>
      <button @click="changeTab">Forgot password?</button>
    </div>
    <div class="container-fluid" v-if="forgotPass">
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@company.com"
        v-model="email"
      />
      <button class="btn btn-primary" @click="e => forgotPassword(e)">
        Recover Password
      </button>
    </div>
    <div class="container-fluid" v-if="recovery">
      <label for="email">Code</label>
      <input type="password" name="email" id="email" v-model="code" />
      <label for="email">New Password</label>
      <input type="password" name="email" id="email" v-model="new_password" />
      <button class="btn btn-primary" @click="e => recoverPassword(e)">
        Change Password
      </button>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      code: "",
      new_password: "",
      forgotPass: false,
      recovery: false
    };
  },
  methods: {
    changeTab() {
      this.forgotPass = true;
    },
    signIn() {
      Auth.signIn(this.email, this.password)
        .then(user => {
          console.log(user);
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    },
    async forgotPassword(e) {
      e.preventDefault();
      Auth.forgotPassword(this.email)
        .then(data => {
          console.log(data);
          this.forgotPass = false;
          this.recovery = true;
        })
        .catch(err => console.log(err));
    },
    recoverPassword(e) {
      e.preventDefault();
      Auth.forgotPasswordSubmit(this.email, this.code, this.new_password)
        .then(data => {
          console.log(data);
          this.$router.go();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
