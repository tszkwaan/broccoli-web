import { shallowMount } from '@vue/test-utils';
import ButtonInvite from '@/components/buttons/ButtonInvite.vue';

describe('ButtonInvite.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ButtonInvite);
  });

  it('onClick() should emit click event', () => {
    wrapper.vm.onClick();
    const emitted = wrapper.emitted().click[0];
    expect(emitted.length).toBe(0);
  });
});
