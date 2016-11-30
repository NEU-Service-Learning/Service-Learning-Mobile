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


export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'dashboard'
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header>
            <Button transparent>
              <Icon name='bars' size={30} />
            </Button>
            <Title style={{color: '#008080', fontWeight: 'bold'}}>Service-Learning</Title>
        </Header>
              <ScrollableTabView>
                  <Dashboard tabLabel='Dashboard' navigator={this.props.navigator}/>
                  <Summary tabLabel='Summary' navigator={this.props.navigator}/>
                  <Settings tabLabel='Settings' navigator={this.props.navigator}/>
              </ScrollableTabView>
      </View>
    );
  }
}
