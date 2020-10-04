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
        />
      </div>
      <div class="form-group">
        <label for="driverBirdthday">Birdthday</label>
        <input type="date" class="form-control" id="driverBirdthday" />
      </div>
      <button class="btn btn-primary">Crear</button>
    </form>
    <router-link to="/panel">VOLVER</router-link>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

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
  }
};
</script>
