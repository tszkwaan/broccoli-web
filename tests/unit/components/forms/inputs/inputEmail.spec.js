import { shallowMount } from '@vue/test-utils';
import InputEmail from '@/components/forms/inputs/InputEmail.vue';

describe('InputEmail.vue', () => {
  it('getValue() should return value', () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(InputEmail, {
      data() {
        return {
          value: email,
        };
      },
    });
    expect(wrapper.vm.getValue()).toMatch(email);
  });

  it('resetValue() should clear value', () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(InputEmail, {
      data() {
        return {
          value: email,
        };
      },
    });
    wrapper.vm.resetValue();
    expect(wrapper.vm.value).toBe('');
  });
});
