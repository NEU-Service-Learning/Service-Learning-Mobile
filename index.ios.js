/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import LogInScreen from './app/components/LogIn/index';
import InfoScreen from './app/components/SignUp/info';
import ClassSelectScreen from './app/components/SignUp/classSelect';
import ProjectSelectScreen from './app/components/SignUp/project';
import Root from './app/components/Dashboard/root';
import Summary from './app/components/Dashboard/summary';
import Details from './app/components/Details/details';
import ManualTracking from './app/components/Tracking/manual';
import Settings from './app/components/Dashboard/settings';

export default class SLTracker extends Component {

  // Renders a particular scene depending on the route title
  renderScene(route, navigator) {
     if(route.title == 'SelectClass') {
       return <ClassSelectScreen navigator={navigator} />
     }
     if(route.title == 'SelectProject') {
       return <ProjectSelectScreen navigator={navigator} {...route.extras} />
     }
     if(route.title == 'Dashboard') {
       return <Root navigator={navigator} />
     }
     if(route.title == 'Summary') {
       return <Summary navigator={navigator} />
     }
     if(route.title == 'Details') {
       return <Details navigator={navigator} />
    }
     if(route.title == 'ManualTracking') {
       return <ManualTracking navigator={navigator} />
     }
     if(route.title == 'LogIn') {
       return <LogInScreen navigator={navigator} />
     }
     if(route.title == 'EnterInfo') {
       return <InfoScreen navigator={navigator} />
     }
     if(route.title == 'Settings') {
       return <Settings navigator={navigator} />
     }
   }

  render() {
    // Change the 'initialRoute' to see your screen
    // Add a case for your screen in the 'renderScene' function
    return (
      <Navigator
        initialRoute={{ title: 'LogIn'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('SLTracker', () => SLTracker);
