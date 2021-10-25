<template>
    <button-base @click="onClick" :is-block="true" label="Request Invite"></button-base>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'button-invite',
  components: {
    ButtonBase,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
</style>
