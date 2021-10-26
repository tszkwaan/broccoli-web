<template>
  <v-btn
    :primary="isPrimary"
    :dark="isDark"
    :block="isBlock"
    :loading="isLoading"
    @click="onClick"
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    isPrimary: {
      default: true,
      type: Boolean,
    },
    isDark: {
      default: true,
      type: Boolean,
    },
    isBlock: {
      default: false,
      type: Boolean,
    },
    label: {
      default: '',
      type: String,
    },
    isLoading: {
      default: false,
      type: Boolean,
    },
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
