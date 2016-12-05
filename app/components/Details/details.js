'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Title, Button, Header, Card, CardItem, Icon} from 'native-base';
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
    var group = true ? 'check-square-o' : 'square-o';
    this.state = {
    }
  }
  navigate() {
   this.props.navigator.pop({
     title: 'Summary',
     extras: {summary : true}
   })
  }

  render() {
    return(
      <View style={style.container}>
        <Header  style={{backgroundColor: '#708090'}}>
          <Button transparent textStyle={{color: 'black'}} onPress={this.navigate.bind(this)}>
          <Icon style={{color: 'black'}} name='ios-arrow-back' size={30}/>
          Back
          </Button>
          <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}> Service-Learning</Title>
          <Button transparent onPress={() => {this.props.navigator.push({ title: 'ManualTracking' })}}>
            <FontAwesome name='pencil' size={30} />
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
        <Text style={style.subheader}>Date</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>FromTime-EndTime</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>Category</Text>
        </CardItem>
        <CardItem>
        <Text style={style.subheader}>Notes</Text>
        </CardItem>
        <CardItem>
        <FontAwesome name={this.group} />
        <Text style={style.subheader}>Group Logged</Text>
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
