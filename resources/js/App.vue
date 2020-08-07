<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  computed: {
    // isLoading() {
    //   return this.$store.state.isLoading;
    // }
  }
};
</script>
