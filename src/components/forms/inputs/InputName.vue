<template>
  <v-text-field
    v-model="value"
    label="Full name"
    :rules="rules"
  />
</template>

<script>
import { NAME_MIN_LENGTH } from '@/constants/form';

export default {
  name: 'InputName',
  components: {
  },
  props: {
  },
  data() {
    return {
      value: '',
      rules: [
        v => (v && v.length >= NAME_MIN_LENGTH) || `should have at least ${NAME_MIN_LENGTH} characters`,
      ],
    };
  },
  watch: {
    name: {
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
