import { shallowMount } from '@vue/test-utils';
import FormInvitation from '@/components/forms/FormInvitation.vue';

describe('FormInvitation.vue', () => {
  it('showError() should update formErrorMsg', () => {
    const wrapper = shallowMount(FormInvitation, {
      data() {
        return {
          errorText: '',
        };
      },
    });
    const errorText = 'Email not match!';

    wrapper.vm.showError(errorText);
    expect(wrapper.vm.formErrorMsg).toMatch(errorText);
  });

});
