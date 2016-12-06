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
import Icon from 'react-native-vector-icons/FontAwesome';
import storage from '../api/storage';
import api from '../api/index';

import { Title, Button, Header, Container, Card, CardItem } from 'native-base';

var style = require('../../styles/styles');

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Dashboard'
    };
  }

  componentDidMount = async () => {
    const value = await storage.getUser();
    if (value == null){
      const user = await this.getUser();
      await storage.saveUser(user);
    }
  }

  async getUser() {
    try{
      const authKey = await storage.getAuthKey();
      const user = await api.getUserFromAuthKey(authKey);
      return user;
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Header>
      <Button transparent> </Button>
      <Button transparent onPress={() => {this.props.navigator.push({ title: 'Settings' })}}>
      <Icon name='cog' size={25} />
      </Button>
      <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}> Service-Learning </Title>
      </Header>
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <Icon.TabBarItem
        title="Dashboard"
        iconName="tachometer"
        selectedIconName="tachometer"
        selected={this.state.selectedTab === 'Dashboard'}
        onPress={() => {
            this.setState({
              selectedTab: 'Dashboard'
      })}}>
      <Dashboard navigator={this.props.navigator} />
      </Icon.TabBarItem>


      <Icon.TabBarItem
        title='Summary'
        iconName="server"
        selectedIconName="server"
        selected={this.state.selectedTab === 'Summary'}
        onPress={() => {
            this.setState({
              selectedTab: 'Summary'
      })}}>
      <Summary navigator={this.props.navigator} />
      </Icon.TabBarItem>
      </TabBarIOS>
      </View>

    );
  }
}
