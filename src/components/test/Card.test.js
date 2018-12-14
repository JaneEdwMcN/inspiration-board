import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = shallow( <Card
      id={1}
      text="Doggo"
      emoji={"heart"}
      />);

      expect(wrapper).toMatchSnapshot();
    });
  });
