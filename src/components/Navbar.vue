<template>
  <div id="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/" class="navbar-brand">Cars Company</router-link>
      <router-link to="/panel" class="navbar-brand">Panel</router-link>
      <router-link to="/auth" class="navbar-brand">Auth</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "../assets/style/Navbar.css";

export default {
  name: "Navbar"
};
</script>
