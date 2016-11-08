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

import Dashboard from './dashboard';
import Summary from './summary';
import ClockIn from './clockin';


export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'dashboard'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
      title='Dashboard'
      selected={this.state.selectedTab === 'dashboard'}
      onPress={() => {
      this.setState({
        selectedTab: 'dashboard'
      })
      }}>
      <Dashboard View />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      title='Clock In'
      selected={this.state.selectedTab === 'clockin'}
      onPress={() => {
      this.setState({
        selectedTab: 'clockin'
      })
      }}>
      <ClockIn View />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      title='Summary'
      selected={this.state.selectedTab === 'summary'}
      onPress={() => {
      this.setState({
        selectedTab: 'summary'
      })
      }}>
      <Summary View />
      </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
