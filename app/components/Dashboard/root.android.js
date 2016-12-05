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

var style = require('../../styles/styles');

export default class Root extends Component {
  constructor(props) {
    super(props)
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
