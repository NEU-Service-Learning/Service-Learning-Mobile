/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TabBarIOS
} from 'react-native';

import Root from './app/components/Dashboard/root';
import ClassSelectScreen from './app/components/SignUp/ClassSelectScreen/index';
import ProjectSelectScreen from './app/components/SignUp/ProjectSelectScreen/index';
<<<<<<< HEAD
import ManualTracking from './app/components/Tracking/manual';
=======
import LogInScreen from './app/components/LogIn/LogInScreen/index';
import InfoScreen from './app/components/SignUp/InfoScreen/index';
>>>>>>> ad44c5171210249d40324f59ec579354590b571c

export default class SLTracker extends Component {
  constructor(props) {
    super(props)
  }

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
     if(route.title == 'ManualTracking') {
      return <ManualTracking navigator={navigator} />
     if(route.title == 'LogIn') {
       return <LogInScreen navigator={navigator} />
     }
     if(route.title == 'EnterInfo') {
       return <InfoScreen navigator={navigator} />
     }
   }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'LogIn'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('SLTracker', () => SLTracker);
