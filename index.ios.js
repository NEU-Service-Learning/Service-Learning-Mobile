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

import Dashboard from './app/components/Dashboard/dashboard';
import Footer from './app/components/Dashboard/footer';
import ClassSelectScreen from './app/components/SignUp/ClassSelectScreen/index';
import ProjectSelectScreen from './app/components/SignUp/ProjectSelectScreen/index';


export default class SLTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'dashboard'
    };
  }

  renderScene(route, navigator) {
     if(route.title == 'SelectClass') {
       return <ClassSelectScreen navigator={navigator} />
     }
     if(route.title == 'SelectProject') {
       return <ProjectSelectScreen navigator={navigator} {...route.extras} />
     }
     if(route.title == 'Dashboard') {
       return <Footer navigator={navigator} />
     }
   }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'SelectClass'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('SLTracker', () => SLTracker);
