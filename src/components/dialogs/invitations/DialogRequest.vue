<template>
  <v-dialog
    v-model="isDisplay"
    content-class="form-dialog"
    width="500"
  >
    <v-card>
      <v-card-title
        id="dialog-title"
        class="title justify-center"
      >
        Request an invite
      </v-card-title>
      <v-card-text>
        <form-invitation
          ref="formInvitation"
          @change="resetErrorMsg"
        />
      </v-card-text>
      <v-card-actions>
        <button-send @click="submitInvitation" />
        <div
          v-show="dialogErrorMsg"
          class="v-messages__message error--text mt-5 mb-2"
        >
          {{ dialogErrorMsg }}
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FormInvitation from '@/components/forms/FormInvitation.vue';
import ButtonSend from '@/components/buttons/ButtonSend.vue';
import ApiInvitations from '@/api/invitations';

export default {
  name: 'DialogInviteRequest',
  components: {
    FormInvitation,
    ButtonSend,
  },
  props: {},
  data() {
    return {
      isDisplay: false,
      dialogErrorMsg: '',
    };
  },
  watch: {
    isDisplay() {
      if (!this.isDisplay) {
        this.resetForm();
      }
    },
  },
  methods: {
    createInvitation() {
      const form = this.$refs.formInvitation.getFormValue();
      ApiInvitations.createInvitation(form)
        .then(() => {
          this.$emit('create');
        })
        .catch((err) => {
          this.dialogErrorMsg = err.response.data.errorMessage;
        });
    },
    showDialog() {
      this.isDisplay = true;
    },
    submitInvitation() {
      if (this.$refs.formInvitation.validateForm()) {
        this.createInvitation();
      }
    },
    closeDialog() {
      this.isDisplay = false;
    },
    resetForm() {
      this.$refs.formInvitation.resetForm();
    },
    resetErrorMsg() {
      this.dialogErrorMsg = '';
    },
  },
};
</script>

<style scoped lang="scss">
.v-dialog > .v-card > .v-card__text {
    padding-top: 20px;
}
#dialog-title {
    font-weight: 300;
}
.v-card__actions {
    flex-direction: column;
}
.error--text {
    font-style: italic;
}
</style>
<style>
.field-title {
    font-weight: 500;
}
</style>
