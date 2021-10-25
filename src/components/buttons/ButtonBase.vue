<template>
    <v-btn @click="onClick" :primary="isPrimary" :dark="isDark" :block="isBlock">
        {{ label }}
    </v-btn>
</template>

<script>
export default {
  name: 'button-base',
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
