import 'react-native';
import React from 'react';
import ClassSelectScreen from '../app/components/SignUp/ClassSelectScreen/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ClassSelectScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
