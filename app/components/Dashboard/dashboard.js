'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ListView,
  Alert,
  ActivityIndicator
} from 'react-native';

import MapView from 'react-native-maps';
//removes deprecated warnings
console.disableYellowBox = true;

import { Title, Icon, Header, Thumbnail, Content, Container, Card, CardItem, Button } from 'native-base';
import AutoTracking from '../Tracking/auto';
import AutoTrackingMap from '../Tracking/map';
import api from '../api/index';

var style = require('../../styles/styles');
var img = require('../../assets/img/Logo.png');

var user =
{
  "pk": 25,
  "username": "2121q3eqwewqe@neu.edu",
  "email": "",
  "first_name": "Erik",
  "last_name": "User",
  "role": "I",
  "id": 25,
  "courses": [
    "CS4500"
  ],
  "projects": [
    1
  ],
  "sections": [
    "56323"
  ]
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       projects: [],
       records: [],
       auto: false,
       loading: false
    }
  }

 async componentDidMount() {
   let records = await api.getRecordsByUser(user.id);
   this.setState({records: records})

   let projectPromises = user.projects.map((project) => {
     return api.getProject(project);
   });
   Promise.all(projectPromises).then((data) => {
     this.setState({loading: false, projects: data})
   });
}

  navigate() {
    this.props.navigator.push({title: 'ManualTracking'});
  }
  startAuto() {
    Alert.alert(
      'Clock In',
      'You will be logging hours for the project "Service Learning Mobile"',
      [
        {text: 'Cancel', onPress: () => console.log('Dismissed')},
        {text: 'OK', onPress: () => {this.setState({auto: true})}},
      ]
    )
  }
  stopAuto(startTime, endTime, proj) {
    var timer = (endTime - startTime) / 60000;
    Alert.alert(
      'Clock Out',
      'Worked ' + timer.toFixed(2) + ' minutes for "Service Learning Mobile". Please input category'
      + ' and any relevant notes',
      [
        {text: 'OK', onPress: () => {
          this.props.navigator.push({
            title: 'ManualTracking',
            extras: {
              start: startTime,
              end: endTime,
              project: proj,
            }});
          this.setState({auto: false});}},
      ]
    )
  }

  render() {
    if(this.state.loading) {
        return(
        <View style={[style.container, style.alignCenter]}>
          <ActivityIndicator animating={true} />
          <Text>Loading Projects</Text>
        </View>
      )
    }
    var text = null
    if (this.state.records.length > 0 && this.state.projects.length > 0) {
      var recentProject = this.state.projects.filter((project) => {
        return project.id == this.state.records[3].project
      });
      text = "You last clocked " + this.state.records[3].total_hours + " hours for " + recentProject[0].name + "."
    } else {
      text = "Click Log In button to log your hours."
    }
    return(
      <ScrollView>
        <View style={{margin: 16}}>
          {this.state.auto ? <AutoTracking onStop={this.stopAuto.bind(this)}/> :
          <Card style={styles.card}>
            <CardItem header>
              <Text style={StyleSheet.flatten([style.subheader, style.font15])}>
                Welcome, FakeUser!
              </Text>
            </CardItem>
          </Card>}

          <AutoTrackingMap projects={this.state.projects} onStart={this.startAuto.bind(this)}/>
          <Card style={styles.card}>
            <CardItem header>
              <Text style={StyleSheet.flatten([style.subheader])}>Log Hours</Text>
            </CardItem>

            <CardItem>
              <Text>{text}</Text>
            </CardItem>
            <CardItem style={{flexDirection:'row', justifyContent: 'flex-end'}}>
            <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])} onPress={this.navigate.bind(this)}>
              <Text style={style.buttonText}> Log Hours</Text>
              </TouchableHighlight>
            </CardItem>
          </Card>
          <Card style={styles.card}>
              <CardItem header>
                  <Text style={StyleSheet.flatten([style.subheader])}>Project Details</Text>
              </CardItem>
              {this.state.projects.map(project => (
                   <CardItem button key={project.id} onPress={() => this.navigate()}>
                       <Thumbnail source={img}/>
                       <Text>{project.name}</Text>
                   </CardItem>
                 ))}

          </Card>
        </View>
      </ScrollView>

    );
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
  }
});

module.exports = Dashboard;
