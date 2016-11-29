'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import { Title, Icon, Header, Button } from 'native-base';

import Dropmenu from './dropmenu';

var style = require('../../Styles/styles');

export default class ManualTracking extends Component {

	constructor(props){
    super(props);

  }

  _onPressButton() {
    this.props.navigator.push({title: 'Dashboard'});
  }

	render() {
		return (
			<View>
			<Header>
			  <Button transparent>
          <Icon name='ios-arrow-back' onPress={() => this.props.navigator.pop()}/>
        </Button>
        <Title>Log Hours</Title>
      </Header>
            <View style={{padding:10}} />
      <Dropmenu
        text = {"Project"}
        mode = {"project"}
      />
      <Dropmenu
        text = {"Date"}
        mode = {"date"}
      />
      <Dropmenu
        text = {"Start Time"}
        mode = {"time"}
      />
      <Dropmenu
        text = {"End Time"}
        mode = {"time"}
      />
      <Dropmenu
        text = {"Category"}
        mode = {"category"}
      />
      <Button
        style={StyleSheet.flatten([style.button, style.alignCenter, style.height50])}
        onPress={this._onPressButton.bind(this)}>
        <Text style={{fontSize: 20}}>Log Hours</Text>
      </Button>

     </View>
		)
	}
}
