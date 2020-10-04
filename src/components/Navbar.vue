<template>
  <div id="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/panel" class="navbar-brand">Cars Company</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ userName }}</em>
            </template>
            <b-dropdown-item @click="e => signOut(e)">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import "../assets/style/Navbar.css";

export default {
  name: "Navbar",
  data: function() {
    return {
      userName: ""
    };
  },
  mounted() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        try {
          this.userName = user.attributes.name;
        } catch (error) {
          console.log(error);
        }
      })
      .catch(err => console.log(err));
  },
  methods: {
    async signOut(e) {
      e.preventDefault();
      try {
        await Auth.signOut();
        this.$router.push("/");
      } catch (error) {
        console.log("error signing out: ", error);
      }
    }
  }
};
</script>
