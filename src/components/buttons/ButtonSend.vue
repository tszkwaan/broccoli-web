<template>
    <button-base @click="onClick" :is-block="true" label="Send"></button-base>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'button-send',
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
