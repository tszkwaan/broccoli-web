<template>
  <v-app-bar
    app
    color="white"
    fixed
  >
    <div class="d-flex align-center navbrand">
      BROCCOLI & CO.
    </div>

    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
  },
};
</script>

<style scoped>
.navbrand {
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 50px;
}
</style>
