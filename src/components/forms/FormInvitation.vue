<template>
  <v-form
    ref="formInvitation"
    lazy-validation
  >
    <input-name
      ref="inputName"
      data-test-suffix="-invitation"
    />
    <input-email
      ref="inputEmail"
      data-test-suffix="-invitation"
      @change="onEmailChange"
    />
    <input-email
      ref="inputConfirmEmail"
      data-test-suffix="-confirm-invitation"
      label="Confirm Email"
      @change="onEmailChange"
    />
    <div
      v-show="formErrorMsg"
      class="v-messages__message error--text"
    >
      {{ formErrorMsg }}
    </div>
  </v-form>
</template>

<script>
import InputName from '@/components/forms/inputs/InputName.vue';
import InputEmail from '@/components/forms/inputs/InputEmail.vue';

export default {
  name: 'FormInvitation',
  components: {
    InputName,
    InputEmail,
  },
  props: {
  },
  data() {
    return {
      name: '',
      email: '',
      formErrorMsg: '',
    };
  },
  methods: {
    getFormValue() {
      return {
        name: this.$refs.inputName.getValue(),
        email: this.$refs.inputEmail.getValue(),
      };
    },
    resetForm() {
      this.$refs.formInvitation.reset();
    },
    showError(errorText) {
      this.formErrorMsg = errorText;
    },
    validateForm() {
      const form = this.getFormValue();
      const confirmEmail = this.$refs.inputConfirmEmail.getValue();
      const isEmailMatched = form.email === confirmEmail;

      if (!isEmailMatched) {
        this.showError('The email you entered does not match with the confirmation email');
      }

      return this.$refs.formInvitation.validate() && isEmailMatched;
    },
    onEmailChange() {
      this.formErrorMsg = '';
      this.$emit('change');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
