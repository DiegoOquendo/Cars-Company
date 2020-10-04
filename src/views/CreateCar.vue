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
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="carPlate">Car Plate</label>
        <input
          type="text"
          class="form-control"
          id="carPlate"
          placeholder="ABC123"
          v-model="car_plate"
        />
      </div>
      <div class="form-group">
        <label for="carModel">Car Model</label>
        <select class="form-control" id="carModel" v-model="car_model">
          <option>Mazda</option>
          <option>Chevrolet</option>
          <option>BMW</option>
        </select>
      </div>
      <button class="btn btn-primary" @click="e => createCar(e)">
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
      isAdmin: false,
      name: "",
      car_plate: "",
      car_model: ""
    };
  },
  methods: {
    async createCar(e) {
      e.preventDefault();
      const carData = {
        name: this.name,
        car_plate: this.car_plate,
        car_model: this.car_model
      };
      try {
        const newCar = await API.graphql({
          query: mutations.createCar,
          variables: { input: carData }
        });
        console.log(newCar);
        this.$router.push("/panel");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
