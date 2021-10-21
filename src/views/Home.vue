<template>
    <section class="home d-flex">
        <section class="banner">
            <h1 class="mb-5">A better way <br/> to enjoy every day</h1>
            <div class="headline mb-5">Be the first to know when we launch.</div>
            <button-request-invite class="mt-5"></button-request-invite>
        </section>
    </section>
</template>

<script>
import ButtonRequestInvite from '@/components/buttons/ButtonRequestInvite.vue';

export default {
  name: 'home',
  components: {
    ButtonRequestInvite,
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
