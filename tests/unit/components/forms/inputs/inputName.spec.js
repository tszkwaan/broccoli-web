import { shallowMount } from '@vue/test-utils';
import InputName from '@/components/forms/inputs/InputName.vue';

describe('InputName.vue', () => {
  it('getValue() should return value', () => {
    const name = 'hello';
    const wrapper = shallowMount(InputName, {
      data() {
        return {
          value: name,
        };
      },
    });
    expect(wrapper.vm.getValue()).toMatch(name);
  });

  it('resetValue() should clear value', () => {
    const name = 'hello';
    const wrapper = shallowMount(InputName, {
      data() {
        return {
          value: name,
        };
      },
    });
    wrapper.vm.resetValue();
    expect(wrapper.vm.value).toBe('');
  });
});
