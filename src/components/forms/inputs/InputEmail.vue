<template>
    <v-text-field
        v-model="value"
        :label="label"
        :rules="rules" />
</template>

<script>

export default {
  name: 'input-email',
  components: {
  },
  props: {
    label: {
      type: String,
      default: 'Email',
      emailValue: {
        type: String,
        default: '',
      },
    },
  },
  data() {
    return {
      value: '',
      rules: [
        v => (v && /.+@.+/.test(v)) || 'Invalid email format',
      ],
    };
  },
  methods: {
    getValue() {
      return this.value;
    },
    resetValue() {
      this.value = '';
    },
  },
  watch: {
    value: {
      handler() {
        this.$emit('change');
      },
    },
  },
};
</script>

<style scoped>
</style>
