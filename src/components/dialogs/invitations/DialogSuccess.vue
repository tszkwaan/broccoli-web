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
        All done!
      </v-card-title>
      <v-card-text class="text-center">
        You will be one of the first to experience Broccoli & Co. when we launch.
      </v-card-text>
      <v-card-actions>
        <button-ok @click="closeDialog" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ButtonOk from '@/components/buttons/ButtonOk.vue';

export default {
  name: 'DialogSuccess',
  components: {
    ButtonOk,
  },
  props: {},
  data() {
    return {
      isDisplay: false,
    };
  },
  watch: {
  },
  methods: {
    openDialog() {
      this.isDisplay = true;
    },
    closeDialog() {
      this.isDisplay = false;
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
</style>
<style>
.field-title {
    font-weight: 500;
}
</style>
