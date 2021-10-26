import { shallowMount } from '@vue/test-utils';
import ButtonOk from '@/components/buttons/ButtonOk.vue';

describe('ButtonOk.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ButtonOk);
  });

  it('onClick() should emit click event', () => {
    wrapper.vm.onClick();
    const emitted = wrapper.emitted().click[0];
    expect(emitted.length).toBe(0);
  });
});
