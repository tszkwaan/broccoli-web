<template>
    <section class="home d-flex">
        <section class="banner">
            <h1 class="mb-5">A better way <br/> to enjoy every day</h1>
            <div class="headline mb-5">Be the first to know when we launch.</div>
            <button-invite class="mt-5" @click="showInvitationDialog">
            </button-invite>
        </section>
        <dialog-invite-request ref="dialogInviteRequest" @create="transitToSuccess">
        </dialog-invite-request>
        <dialog-invite-success ref="dialogSuccess"></dialog-invite-success>
    </section>
</template>

<script>
import ButtonInvite from '@/components/buttons/ButtonInvite.vue';
import DialogInviteRequest from '@/components/dialogs/invitations/DialogRequest.vue';
import DialogInviteSuccess from '@/components/dialogs/invitations/DialogSuccess.vue';

export default {
  name: 'home',
  components: {
    ButtonInvite,
    DialogInviteRequest,
    DialogInviteSuccess,
  },
  methods: {
    showInvitationDialog() {
      this.$refs.dialogInviteRequest.showDialog();
    },
    transitToSuccess() {
      this.$refs.dialogInviteRequest.closeDialog();
      this.$refs.dialogSuccess.showDialog();
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
    height: 100%;
    align-items: center;
    justify-content: center;
}
.banner {
    text-align: center;

    h1 {
        font-size: 3rem;
    }
}
</style>
