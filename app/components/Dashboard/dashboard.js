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


import { Title, Icon, Header, Thumbnail, Content, Container, Card, CardItem, Button } from 'native-base';
import AutoTracking from '../Tracking/auto';
import AutoTrackingMap from '../Tracking/map';
import api from '../api/index';

var style = require('../../styles/styles');
var img = require('../../assets/img/Logo.png')

var user =
{
    "pk": 3,
    "username": "chen.jo@husky.neu.edu",
    "email": "",
    "first_name": "Joe",
    "last_name": "Chen",
    "role": null,
    "id": 3,
    "courses": [
        "CS1200",
        "CS4500"
    ],
    "projects": [
        1
    ],
    "sections": [
        "44221",
        "56323"
    ]
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       projects: [],
       auto: false,
       loading: true
    }
  }

  componentDidMount() {
    let projectPromises = user.projects.map((project) => {
      return api.getProject(project);
    });
    // Get all the sections for a class
    Promise.all(projectPromises).then((data) => {
      // Update each class with its list of sections
      // data.forEach((sections, index) => {
      //   projects[index].sections = sections
      // })
      console.log(data)
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
    return(
      <ScrollView>
          <View style={{margin: 16}}>
             {this.state.auto ? <AutoTracking onStop={this.stopAuto.bind(this)}/> : null}
             <AutoTrackingMap projects={this.state.projects} onStart={this.startAuto.bind(this)}/>

             <Card style={styles.card}>
                 <CardItem header>
                     <Text style={StyleSheet.flatten([style.subheader])}>Log Hours</Text>
                 </CardItem>

                 <CardItem>
                   <Text>You last clocked 2 hours on 11/30 for Service-Learning</Text>
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
