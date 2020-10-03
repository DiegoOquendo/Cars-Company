<template>
  <div id="panel">
    <Navbar />
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: isDrivers }"
          v-on:click="changeTab(1)"
          >Drivers</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: isCars }"
          v-on:click="changeTab(2)"
          >Cars</a
        >
      </li>
    </ul>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import "../assets/style/Panel.css";
import Navbar from "@/components/Navbar.vue";
import Cars from "@/components/Cars.vue";
import Drivers from "@/components/Drivers.vue";

export default {
  name: "Panel",
  components: {
    Navbar,
    Cars,
    Drivers
  },
  data: function() {
    return {
      isDrivers: true,
      isCars: false,
      currentTabComponent: "Drivers"
    };
  },
  methods: {
    changeTab(actualTab) {
      if (actualTab === 1) {
        this.isDrivers = true;
        this.isCars = false;
        this.currentTabComponent = "Drivers";
      } else {
        this.isDrivers = false;
        this.isCars = true;
        this.currentTabComponent = "Cars";
      }
    }
  }
};
</script>
