<template>
    <button-base @click="onClick" :is-block="true" label="Ok"></button-base>
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'button-ok',
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
