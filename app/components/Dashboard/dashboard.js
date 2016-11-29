'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ListView
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';

var style = require('../../Styles/styles');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    var dsProj = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
       projects: dsProj.cloneWithRows([
                    'Time Tracker', 'Project 1', 'Project 2',
              ]),
    }
  }
  navigate() {
    this.props.navigator.push({title: 'ManualTracking'});
  }

  render() {
    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
        <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
          <TouchableHighlight style={StyleSheet.flatten([style.button, style.height55])} onPress={this.navigate.bind(this)}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}> Clock In </Text>
          </TouchableHighlight>
        </View>
        <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
          <ListView
            dataSource={this.state.projects}
            renderRow={(rowData) =>
              <TouchableHighlight style={StyleSheet.flatten([style.button, style.height55])}
                onPress={()=> this.navigate()}>
                <Text style={{fontWeight: 'bold'}}>{rowData}</Text>
              </TouchableHighlight>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    width: 250,
    marginTop: 50,
    marginBottom: 50,
    height: 60,
  }
});

module.exports = Dashboard;
