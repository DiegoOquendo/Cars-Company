<template>
  <div id="auth">
    <component v-bind:is="currentTabComponent"></component>
    <button @click="changeTab">{{ btnLabel }}</button>
  </div>
</template>

<script>
import "../assets/style/Auth.css";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Auth",
  components: {
    Login,
    SignUp
  },
  data: function() {
    return {
      currentTabComponent: "Login",
      btnLabel: "Or Sign Up"
    };
  },
  methods: {
    changeTab() {
      if (this.currentTabComponent === "Login") {
        this.currentTabComponent = "SignUp";
        this.btnLabel = "Or Sign In";
      } else {
        this.currentTabComponent = "Login";
        this.btnLabel = "Or Sign Up";
      }
    }
  }
};
</script>
