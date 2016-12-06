'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Title, Button, Header, Card, CardItem} from 'native-base';
import MapView from 'react-native-maps';

var style = require('../../styles/styles');

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  navigate() {
   this.props.navigator.pop({
     title: 'Summary'
      })
  }

  category(cat) {
    switch(cat) {
      case "TO":
        return "Trainings & Orientations";
      case "DS":
        return "Direct Service";
      case "IR":
        return "Individual Research & Planning";
      case "TR":
        return "Team Research & Planning";
    }
  }

  render() {
    return(
      <View style={StyleSheet.flatten([style.container])}>
        <Header>
          <Button transparent  onPress={this.navigate.bind(this)}>
            <Icon name='arrow-left' size={25}/>
          </Button>
          <Title style={StyleSheet.flatten([style.header, style.alignCenter])}> Service-Learning</Title>
          <Button transparent onPress={() => {this.props.navigator.push({ title: 'ManualTracking' })}}>
            <Icon name='pencil' size={25} />
          </Button>
        </Header>
        <Text style={StyleSheet.flatten([style.subheader, style.textCenter, {marginTop:10}])}>Time Tracking</Text>
        <ScrollView>
        <Card style={StyleSheet.flatten([style.card])}>
        <CardItem>
        <Text style={StyleSheet.flatten([style.subheader])}>Location</Text>
            <MapView
              style={StyleSheet.flatten([style.map, {marginTop:8}])}
              initialRegion={{
                latitude: 42.340951,
                longitude: -71.087566,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <MapView.Marker
              coordinate={{'latitude': 42.341855, 'longitude': -71.086745}}
              title={"Sdfdsf"}
              description={"sdfdsf"}
            />
        </CardItem>
        <CardItem>
        <Text style={StyleSheet.flatten([style.subheader])}>Date: {this.props.data.date}</Text>
        <Text style={StyleSheet.flatten([style.subheader])}>Start Time: {this.props.data.start_time}</Text>
        <Text style={StyleSheet.flatten([style.subheader])}>Hours: {this.props.data.total_hours}</Text>
        </CardItem>
        <CardItem>
        <Text style={StyleSheet.flatten([style.subheader])}>Category: {this.category(this.props.data.category)}</Text>
        </CardItem>
        <CardItem>
        <Text style={StyleSheet.flatten([style.subheader])}>Notes: {this.props.data.comments}</Text>
        </CardItem>
        <CardItem>
        <Text style={StyleSheet.flatten([style.subheader])}>Extra Fields</Text>
        </CardItem>
        </Card>
        </ScrollView>
      </View>
    )
  }
}

module.exports = Details;
