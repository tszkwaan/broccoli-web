<template>
  <section class="home">
    <div class="banner">
      <v-container>
        <h1 class="mb-5">
          A better way <br> to enjoy every day
        </h1>
        <div class="headline mb-5">
          Be the first to know when we launch.
        </div>
        <button-invite
          class="mt-5"
          @click="showInvitationDialog"
        />
      </v-container>
    </div>
    <dialog-invite-request
      ref="dialogInviteRequest"
      @create="transitToSuccess"
    />
    <dialog-invite-success ref="dialogSuccess" />
  </section>
</template>

<script>
import ButtonInvite from '@/components/buttons/ButtonInvite.vue';
import DialogInviteRequest from '@/components/dialogs/invitations/DialogRequest.vue';
import DialogInviteSuccess from '@/components/dialogs/invitations/DialogSuccess.vue';

export default {
  name: 'Home',
  components: {
    ButtonInvite,
    DialogInviteRequest,
    DialogInviteSuccess,
  },
  methods: {
    showInvitationDialog() {
      this.$refs.dialogInviteRequest.openDialog();
    },
    transitToSuccess() {
      this.$refs.dialogInviteRequest.closeDialog();
      this.$refs.dialogSuccess.openDialog();
    },
  },
};
</script>
<style lang="scss" scoped>

@import "~@/assets/sass/utilities/_variables.scss";
@import "~@/assets/sass/utilities/_mixins.scss";

.home {
    height: 100%;
    align-items: center;
    justify-content: center;
}
.banner {
    text-align: center;
    background-image: url('~@/assets/img/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    @media (max-width: $screen-small) {
        background-image: url('~@/assets/img/bg_min.jpg');
    }

    .container {
        @include align-center;
    }

    h1 {
        font-size: 3rem;

        @media (max-width: $screen-small) {
            font-size: 2rem;
        }
    }
}
</style>
