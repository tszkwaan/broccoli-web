<template>
  <button-base
    :is-block="true"
    label="Ok"
    @click="onClick"
  />
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'ButtonOk',
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
