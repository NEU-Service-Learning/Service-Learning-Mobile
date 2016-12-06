'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import { Title, Icon, Header, Card, CardItem, Button } from 'native-base';
import MapView from 'react-native-maps';
import geolib from 'geolib';

var style = require('../../styles/styles');

const MIN_DISTANCE = 500 // in meters

export default class AutoTrackingMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPosition: {'latitude': 0, 'longitude': 0},
    }
  }

  watchID: ?number = null;

  componentDidMount() {
   navigator.geolocation.getCurrentPosition(
     (position) => {
       var currentPosition = {'latitude': position.coords.latitude, 'longitude': position.coords.longitude};
       this.setState({currentPosition});
       this.props.onLocationFound(currentPosition);
     },
     (error) => console.log(JSON.stringify(error)),
     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   );
   this.watchID = navigator.geolocation.watchPosition((position) => {
     var currentPosition = {'latitude': position.coords.latitude, 'longitude': position.coords.longitude};
     this.setState({currentPosition});
     this.props.onLocationFound(currentPosition);
   });
 }

 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID);
 }


  render() {
    let nearProjects = this.props.projects.filter((project) => {
      return geolib.getDistance(this.state.currentPosition, {latitude: project.latitude,longitude: project.longitude}) < MIN_DISTANCE
    });
    let markers = this.props.projects.map((marker) => {
      return(
            <MapView.Marker
              coordinate={{latitude: Number(marker.latitude), longitude: Number(marker.longitude)}}
              title={marker.name}
              description={marker.description}
              key={marker.id}
            />
        )
        });
    let item = null;
    if(nearProjects.length > 0) {
      item = (
          <CardItem style={{flexDirection:'row'}}>
            <Text style={{flex: 2}}>You are near {nearProjects[0].name}</Text>
            <TouchableHighlight onPress={this.props.onStart} style={StyleSheet.flatten([style.button, style.height40])}>
              <Text style={style.buttonText}> Clock In</Text>
            </TouchableHighlight>
        </CardItem>
      )
    }
    else {
      item = (
        <CardItem style={{flexDirection:'row'}}>
          <Text style={{flex: 1}}>You are not near any Service-Learning partner</Text>
      </CardItem>
      )
    }
    return(
      <Card style={styles.card}>
          <CardItem header>
              <Text style={StyleSheet.flatten([style.subheader])}>Project Tracking</Text>
          </CardItem>
          <CardItem>
              <MapView
                style={StyleSheet.flatten([style.map])}
                initialRegion={{
                  latitude: 42.340951,
                  longitude: -71.087566,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <MapView.Marker
                  coordinate={this.state.currentPosition}
                  title={"Your Position"}
                  pinColor={'blue'}
                />
              {markers}
              </MapView>
          </CardItem>
          {item}
     </Card>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: 200
  },
  card: {
    marginTop: 8
  },
  container: {
    margin: 16
  },
  timer: {
    fontSize: 50,
    fontWeight: '100',
    alignSelf: 'center',
  }
});
