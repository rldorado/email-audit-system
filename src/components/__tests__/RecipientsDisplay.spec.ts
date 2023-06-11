import { shallowMount } from '@vue/test-utils';
import RecipientsDisplay from '@/components/RecipientsDisplay.vue';

describe('RecipientsDisplay', () => {
  it('displays all recipients when there is enough space', () => {
    const recipients = ['john@example.com', 'jane@example.com', 'james@example.com'];
    const wrapper = shallowMount(RecipientsDisplay, {
      props: {
        recipients
      }
    });

    expect(wrapper.text()).toBe('john@example.com, jane@example.com, james@example.com');
  });

  it('trims recipients and adds a badge when there is not enough space', () => {
    const recipients = ['john@example.com', 'jane@example.com', 'james@example.com', 'jessica@example.com', 'jacob@example.com'];
    const wrapper = shallowMount(RecipientsDisplay, {
      props: {
        recipients
      }
    });

    expect(wrapper.text()).toBe('john@example.com, jane@example.com, james@example.com, jessica@example.com, ... +1');
  });
});
