'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Picker,
} from 'react-native';

import { Title, Icon, Header, Button } from 'native-base';
import MapView from 'react-native-maps';

export default class AutoTracking extends Component {

	constructor(props){
    super(props);
    
    this.state = {
      region: {
	      latitude: 37.78825,
	      longitude: -122.4324,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	    },
    }
  }

	getInitialRegion() {
	  return {
	    region: {
	      latitude: 37.78825,
	      longitude: -122.4324,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	    },
	  };
	}

	onRegionChange(region) {
	  this.setState({ region });
	}

	render() {
	  return (
	    <View><MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /></View>
	  );
	}
}