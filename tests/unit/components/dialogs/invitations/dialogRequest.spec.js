import { shallowMount } from '@vue/test-utils';
import DialogRequest from '@/components/dialogs/invitations/DialogRequest.vue';
import FormInvitation from '@/components/forms/FormInvitation.vue';

describe('DialogRequest.vue', () => {
  it('openDialog() should update isDisplay to true', () => {
    const wrapper = shallowMount(DialogRequest, {
      data() {
        return {
          isDisplay: false,
        };
      },
      stubs: {
        'form-invitation': FormInvitation,
      },
    });

    wrapper.vm.openDialog();
    expect(wrapper.vm.isDisplay).toBe(true);
  });

  it('resetErrorMsg() should clear dialogErrorMsg', () => {
    const wrapper = shallowMount(DialogRequest, {
      data() {
        return {
          dialogErrorMsg: 'Email not matched!',
        };
      },
      stubs: {
        'form-invitation': FormInvitation,
      },
    });

    wrapper.vm.resetErrorMsg();
    expect(wrapper.vm.dialogErrorMsg).toBe('');
  });
});
