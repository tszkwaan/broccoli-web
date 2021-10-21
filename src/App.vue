<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <the-footer></the-footer>
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
