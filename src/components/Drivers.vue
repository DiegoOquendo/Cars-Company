<template>
  <div>
    <h1>This is Driverss</h1>
    <router-link to="/createdrivers" class="btn btn-primary" v-if="isAdmin"
      >Create Driver</router-link
    >
    <amplify-connect :query="listDriversQuery">
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">loading</div>
        <div v-if="errors.length > 0">Errors</div>
        <div v-else-if="data">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Birdthday</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="driver in data.listDrivers.items" :key="driver.id">
                <td>{{ driver.name }}</td>
                <td>{{ driver.birdthday }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </amplify-connect>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { components } from "aws-amplify-vue";
// Drivers Query
const listDriversQuery = `
  query listDrivers {
  listDrivers {
    items{
      id
      name
      birdthday
    }
  }
}
`;
export default {
  name: "Drivers",
  component: {
    ...components
  },
  mounted() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        try {
          if (user.attributes["custom:account_type"] === "Admin") {
            this.isAdmin = true;
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch(err => console.log(err));
  },
  data: function() {
    return {
      isAdmin: false
    };
  },
  computed: {
    listDriversQuery() {
      return this.$Amplify.graphqlOperation(listDriversQuery);
    }
  }
};
</script>
