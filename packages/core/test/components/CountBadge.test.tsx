import React from 'react';
import { shallow, mount } from 'enzyme';
import CountBadge from '../../src/components/CountBadge';

describe('<CountBadge />', () => {
  const props = {
    accessibilityLabel: '5 unread messages',
    value: 5,
  };

  it('renders default', () => {
    const wrapper = shallow(<CountBadge {...props} />).dive();

    expect(wrapper).toMatchSnapshot();
  });

  it('does not render when value is 0', () => {
    const wrapper = shallow(<CountBadge {...props} value={0} />).dive();

    expect(wrapper).toMatchSnapshot();
  });

  it('handles waggle class based on interval setting', () => {
    const wrapper = shallow(<CountBadge {...props} />).dive();
    const oldClass = wrapper.prop('className');

    wrapper.setProps({
      waggle: true,
    });

    expect(wrapper.prop('className')).not.toBe(oldClass);
  });

  it('adds animation when value is changed', () => {
    const wrapper = mount(<CountBadge {...props} waggle />);
    const div = wrapper.find('div').getDOMNode() as HTMLDivElement;

    div.animate = jest.fn();

    wrapper.setProps({ value: 10 });

    expect(div.animate).toHaveBeenCalledTimes(1);
    expect(div.animate).toHaveBeenCalledWith(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)', offset: 0.3 },
        { transform: 'scale(.95)', offset: 0.8 },
        { transform: 'scale(1)' },
      ],
      300,
    );

    wrapper.setProps({ value: 0 });
    expect(div.animate).toHaveBeenCalledTimes(1);
  });
});
