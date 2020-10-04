<template>
  <div>
    <h1>This is Cars</h1>
    <router-link to="/createcars" class="btn btn-primary"
      >Create Car</router-link
    >
    <amplify-connect :query="listCarsQuery">
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">loading</div>
        <div v-if="errors.length > 0">Errors</div>
        <div v-else-if="data">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Car Plate</th>
                <th scope="col">Car Model</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="car in data.listCars.items" :key="car.id">
                <td>{{ car.name }}</td>
                <td>{{ car.car_plate }}</td>
                <td>{{ car.car_model }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </amplify-connect>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";
// Get Cars Query
const listCarsQuery = `
  query listCars {
  listCars {
    items{
      id
      name
      car_plate
      car_model
    }
  }
}
`;
export default {
  name: "Cars",
  component: {
    ...components
  },
  computed: {
    listCarsQuery() {
      return this.$Amplify.graphqlOperation(listCarsQuery);
    }
  }
};
</script>
