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
import DatePicker from '../Tracking/manual';


export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Dashboard'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
        title='Dashboard'
        selected={this.state.selectedTab === 'Dashboard'}
        onPress={() => {
            this.setState({
              selectedTab: 'Dashboard'
      })
      }}>
      <Dashboard navigator={this.props.navigator} />
      </TabBarIOS.Item>

      <TabBarIOS.Item
        title='Clock In'
        selected={this.state.selectedTab === 'ManualTracking'}
        onPress={() => {
            this.setState({
              selectedTab: 'ManualTracking'
      })
      }}>
      <DatePicker navigator={this.props.navigator}/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
        title='Summary'
        selected={this.state.selectedTab === 'Summary'}
        onPress={() => {
            this.setState({
              selectedTab: 'Summary'
      })
      }}>
      <Summary navigator={this.props.navigator} />
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
