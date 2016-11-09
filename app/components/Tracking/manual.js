'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  TouchableHighlight,
  Picker,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem, Button } from 'native-base';

export default class ManualTracking extends Component {

	constructor(props) {
    super(props)
    this.state = {
      language: 'Java',
      mode: Picker.MODE_DIALOG,
    };
  }

	render() {
		return (
			<Container>
			<Header>
			  <Button transparent>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Log Hours</Title>
      </Header>
      <Picker
        style={{width: 100}}
        selectedValue={this.state.language}
        onValueChange={this.onValueChange.bind(this, 'language')}>
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Js" value="Js" />
      </Picker>
      </Container>
		)
	}

  changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DIALOG
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

	onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
}