<template>
  <button-base
    data-test="button-invite"
    label="Request Invite"
    @click="onClick"
  />
</template>

<script>
import ButtonBase from '@/components/buttons/ButtonBase.vue';

export default {
  name: 'ButtonInvite',
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
