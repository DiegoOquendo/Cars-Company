<template>
  <div id="home-content">
    <h1>This is a cars Company WUu</h1>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum
      nostrum animi, excepturi quaerat exercitationem amet omnis, quos pariatur
      ut impedit eius rem placeat. Dignissimos laborum odio vitae molestias
      doloremque!
    </h3>
    <router-link to="/auth" class="btn btn-dark">Dark</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    msg: String
  }
};
</script>
