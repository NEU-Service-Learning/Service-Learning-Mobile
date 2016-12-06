'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { Title, Button, Header, Container, Content } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from './dashboard';
import Summary from './summary';
import Settings from './settings';

import storage from '../api/storage'
import api from '../api/index'
var style = require('../../styles/styles');


export default class Root extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = async () => {
    const value = await storage.getUser();
    console.log(value);
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
       <Header style={{backgroundColor: '#708090'}}>
           <Button transparent> </Button>
           <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}>Service-Learning</Title>
           <Button transparent onPress={() => {this.props.navigator.push({ title: 'Settings' })}}>
             <Icon name='cog' size={30} />
           </Button>
       </Header>
             <ScrollableTabView>
                 <Dashboard tabLabel='Dashboard' navigator={this.props.navigator}/>
                 <Summary tabLabel='Summary' navigator={this.props.navigator}/>
             </ScrollableTabView>
     </View>
    );
  }
}
