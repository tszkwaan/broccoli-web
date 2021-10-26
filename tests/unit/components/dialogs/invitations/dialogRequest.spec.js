import { shallowMount } from '@vue/test-utils';
import DialogRequest from '@/components/dialogs/invitations/DialogRequest.vue';

describe('DialogRequest.vue', () => {
  it('openDialog() should update isDisplay to true', () => {
    const wrapper = shallowMount(DialogRequest, {
      data() {
        return {
          isDisplay: false,
        };
      },
    });

    wrapper.vm.openDialog();
    expect(wrapper.vm.isDisplay).toBe(true);
  });

  it('closeDialog() should update isDisplay to false', () => {
    const wrapper = shallowMount(DialogRequest, {
      data() {
        return {
          isDisplay: true,
        };
      },
    });

    wrapper.vm.closeDialog();
    expect(wrapper.vm.isDisplay).toBe(false);
  });

  it('resetErrorMsg() should clear dialogErrorMsg', () => {
    const wrapper = shallowMount(DialogRequest, {
      data() {
        return {
          dialogErrorMsg: 'Email not matched!',
        };
      },
    });

    wrapper.vm.resetErrorMsg();
    expect(wrapper.vm.dialogErrorMsg).toBe('');
  });
});
