import 'react-native';
import React from 'react';
import ProjectSelectScreen from '../app/components/SignUp/ProjectSelectScreen/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ProjectSelectScreen projects={['abc', 'def', 'ghi']}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
