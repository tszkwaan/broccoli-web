<template>
  <button-base
    :is-block="true"
    :is-loading="isLoading"
    label="Send"
    @click="onClick"
  />
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'ButtonSend',
  components: {
    ButtonBase,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
</style>
