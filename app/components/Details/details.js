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

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: 200
  },
  card: {
    marginTop: 8
  },
});
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
      <View style={style.container}>
        <Header  style={{backgroundColor: '#708090'}}>
          <Button transparent  onPress={this.navigate.bind(this)}>
            <Icon name='arrow-left' size={30}/>
          </Button>
          <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}> Service-Learning</Title>
          <Button transparent onPress={() => {this.props.navigator.push({ title: 'ManualTracking' })}}>
            <Icon name='pencil' size={30} />
          </Button>
        </Header>
        <Text style={style.subheader}>Time Tracking</Text>
        <ScrollView>
        <Card style={styles.card}>
        <CardItem>
        <Text style={style.subheader}>Location</Text>
            <MapView
              style={styles.map}
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
        <Text style={style.subheader}>Date: {this.props.data.date}</Text>
        <Text style={style.subheader}>Start Time: {this.props.data.start_time}</Text>
        <Text style={style.subheader}>Hours: {this.props.data.total_hours}</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>Category: {this.category(this.props.data.category)}</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>Notes: {this.props.data.comments}</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>Extra Fields</Text>
        </CardItem>
        </Card>
        </ScrollView>
      </View>
    )
  }
}

module.exports = Details;
