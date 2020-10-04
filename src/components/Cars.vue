<template>
  <div>
    <h1>This is Cars</h1>
    <router-link to="/createcars" class="btn btn-primary"
      >Create Car</router-link
    >
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Car Plate</th>
          <th scope="col">Car Model</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </table>
    <amplify-connect :query="listCarsQuery">
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">loading</div>
        <div v-if="errors.length > 0">Errors</div>
        <div v-else-if="data">
          {{ data }}
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
