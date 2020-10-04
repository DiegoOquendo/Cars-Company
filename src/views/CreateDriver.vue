<template>
  <div id="form-drivers">
    <h1>Create a new Driver</h1>
    <form>
      <div class="form-group">
        <label for="driverName">Name</label>
        <input
          type="text"
          class="form-control"
          id="driverName"
          placeholder="Juan Pablo Montoya"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="driverBirdthday">Birdthday</label>
        <input
          type="date"
          class="form-control"
          id="driverBirdthday"
          v-model="birdthday"
        />
      </div>
      <button class="btn btn-primary" @click="e => createDriver(e)">
        Crear
      </button>
    </form>
    <router-link to="/panel">VOLVER</router-link>
  </div>
</template>

<script>
import { Auth, API } from "aws-amplify";
import * as mutations from "../graphql/mutations";

export default {
  name: "Drivers",
  mounted() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        try {
          if (user.attributes["custom:account_type"] !== "Admin") {
            this.$router.push("/panel");
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch(err => {
        console.log(err);
        if (err === "not authenticated") {
          this.$router.push("/");
        }
      });
  },
  data: function() {
    return {
      name: "",
      birdthday: ""
    };
  },
  methods: {
    async createDriver(e) {
      e.preventDefault();
      const driverData = {
        name: this.name,
        birdthday: this.birdthday
      };
      try {
        const newDriver = await API.graphql({
          query: mutations.createDriver,
          variables: { input: driverData }
        });
        console.log(newDriver);
        this.$router.push("/panel");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
