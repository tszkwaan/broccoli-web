<template>
    <v-btn @click="onClick" primary dark>
        Request an invite
    </v-btn>
</template>

<script>
export default {
  name: 'button-request-invite',
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
</style>
