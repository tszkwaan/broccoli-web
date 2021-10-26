import { shallowMount } from '@vue/test-utils';
import ButtonBase from '@/components/buttons/ButtonBase.vue';

describe('ButtonBase.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ButtonBase);
  });

  it('onClick() should emit click event', () => {
    wrapper.vm.onClick();
    const emitted = wrapper.emitted().click[0];
    expect(emitted.length).toBe(0);
  });
});
