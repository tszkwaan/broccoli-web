<template>
  <v-text-field
    v-model="value"
    :data-test="`input-email${dataTestSuffix}`"
    :label="label"
    :rules="rules"
  />
</template>

<script>

export default {
  name: 'InputEmail',
  components: {
  },
  props: {
    label: {
      type: String,
      default: 'Email',
    },
    dataTestSuffix: {
      type: String,
      default: '',
    },
    emailValue: {
      type: String,
      default: '',
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
  watch: {
    value: {
      handler() {
        this.$emit('change');
      },
    },
  },
  methods: {
    getValue() {
      return this.value;
    },
    resetValue() {
      this.value = '';
    },
  },
};
</script>

<style scoped>
</style>
