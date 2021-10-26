import { shallowMount } from '@vue/test-utils';
import DialogSuccess from '@/components/dialogs/invitations/DialogSuccess.vue';

describe('DialogSuccess.vue', () => {
  it('openDialog() should update isDisplay to true', () => {
    const wrapper = shallowMount(DialogSuccess, {
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
    const wrapper = shallowMount(DialogSuccess, {
      data() {
        return {
          isDisplay: true,
        };
      },
    });

    wrapper.vm.closeDialog();
    expect(wrapper.vm.isDisplay).toBe(false);
  });

});
