import { shallowMount } from '@vue/test-utils';
import ButtonSend from '@/components/buttons/ButtonSend.vue';

describe('ButtonSend.vue', () => {
  it('onClick() should emit click event', () => {
    const wrapper = shallowMount(ButtonSend);
    wrapper.vm.onClick();
    const emitted = wrapper.emitted().click[0];
    expect(emitted.length).toBe(0);
  });

  it('startLoading() should update isLoading to true', () => {
    const wrapper = shallowMount(ButtonSend, {
      data() {
        return {
          isLoading: false,
        };
      },
    });

    wrapper.vm.startLoading();
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it('stopLoading() should update isLoading to false', () => {
    const wrapper = shallowMount(ButtonSend, {
      data() {
        return {
          isLoading: true,
        };
      },
    });

    wrapper.vm.stopLoading();
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
