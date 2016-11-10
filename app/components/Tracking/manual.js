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

      <Button
        style={styles.button}
        onPress={this._onPressButton.bind(this)}>
        <Text style={{fontSize: 20}}>Log Hours</Text>
      </Button>

     </View>
		)
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2ab9f7',
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginTop: 30,
  }
})
