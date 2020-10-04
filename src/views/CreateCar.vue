<template>
  <div id="form-cars">
    <h1>Create a new Car</h1>
    <form>
      <div class="form-group">
        <label for="carName">Car Name</label>
        <input
          type="text"
          class="form-control"
          id="carName"
          placeholder="CX 30, Onix, X6"
        />
      </div>
      <div class="form-group">
        <label for="carPlate">Car Plate</label>
        <select class="form-control" id="carPlate">
          <option>ABC123</option>
        </select>
      </div>
      <div class="form-group">
        <label for="carModel">Car Model</label>
        <select class="form-control" id="carModel">
          <option>Mazda</option>
          <option>Chevrolet</option>
          <option>BMW</option>
        </select>
      </div>
      <button class="btn btn-primary">Crear</button>
    </form>
    <router-link to="/panel">VOLVER</router-link>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "CreateCar",
  mounted() {
    Auth.currentAuthenticatedUser().catch(err => {
      console.log(err);
      if (err === "not authenticated") {
        this.$router.push("/");
      }
    });
  },
  data: function() {
    return {
      isAdmin: false
    };
  }
};
</script>
