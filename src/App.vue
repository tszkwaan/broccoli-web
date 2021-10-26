<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    TheFooter,
  },
};
</script>
<style scoped>
.container {
    height: 100%;
}
</style>
