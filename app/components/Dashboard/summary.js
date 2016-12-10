'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ProgressBarAndroid,
  ProgressViewIOS,
  Picker,
  ScrollView,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';
import api from '../api/index';

//removes deprecated warnings
console.disableYellowBox = true;

var style = require('../../styles/styles');

var dsTeam = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var dsWork = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

//Gets the correct progress bar for iOS or Android
const Progress = (Platform.OS == 'ios') ? ProgressViewIOS : ProgressBarAndroid;

//Hard coded projects list for dropdown
const projects = [{label:'Time Tracker', key:0},
                      {label:'Project 1', key:1},
                      {label:'Project 2', key:2}];

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: dsTeam.cloneWithRows([
              'Ross Frank', 'Jagroop Hothi', 'Mustafa Camurcu', 'Charles Zheng', 'Joana  Vukatana'
              ]),
      //Hardcoded to this just to create the list, it will disapear
      work: dsWork.cloneWithRows([
              'Ross Frank', 'Jagroop Hothi', 'Mustafa Camurcu', 'Charles Zheng', 'Joana  Vukatana'
              ]),
      project: 'Time Tracker',
      visible: false,
      hoursComp: 0,
      courseHours: 0,
      courseAvg : 0,
    }
  }

  //api calls
  // TODO: Most api calls are hard coded
  componentDidMount = async () => {
  try {
    //TODO: don't hard-code specific records, hours, enrollments, etc, pull from logged in user
    const records = await api.getRecordsForUser(25);
    const hours = await api.getHoursForProjectForUser(25,1);
    const enrollment = await api.getEnrollmentsForCRN(56323);
    const courseH = enrollment[0].required_hours;
    const courseA = Math.round(courseH/enrollment.length * 100) / 100;
    this.setState({work: dsWork.cloneWithRows(records),
                  hoursComp: hours.total_hours, courseHours: courseH, courseAvg: courseA});
  } catch (e) {
    this.setState({loading: false, error: true})
    }
  }

  //go to details page with data
  navigate(rowData) {
    this.props.navigator.push({
      title: 'Details',
      extras: {data: rowData},
    })
  }

  //display for the record
  displayData(record) {
    return '' + record.date + ': ' + record.total_hours + 'hrs work';
  }

  toggleVisible() {
    var vis = !this.state.visible;
    this.setState({visible: vis});
  }

/**
If on iOS, the picker element is only shown on touch. If on android, it is shown
always. This is a consequence of the two platforms' different native picker displays

TODO: any records beyond the first 3 will be hidden by the TabBarIOS component in iOS -
fix so that it isn't underneath the tabbar
**/

/*
  Progress bar shows individual progress vs  required hours
  Group members are hard coded
  Records needs to show more user friendly information
*/
  render() {
    var pick = (
      <Picker
        style={Platform.OS === 'ios' ? {} :
          StyleSheet.flatten([style.button, style.height40, {width:  250}])}
        selectedValue={this.state.project}
        onValueChange={(proj) => this.setState({project: proj})}>
        {projects.map((proj) =>
          (<Picker.Item key={proj.key} label={proj.label} value={proj.label}/>)) }
      </Picker>
    )
    var menu = (
      <View>
        <TouchableOpacity onPress={this.toggleVisible.bind(this)}
          style={{marginRight: 20, alignItems: 'flex-end'}}>
          <Text>Done</Text>
        </TouchableOpacity>
        {pick}
      </View>
    )

    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
      <View style={style.container}>
       <Text style={StyleSheet.flatten([style.subheader, style.textCenter, style.margin7])}>Project</Text>
       <View>
         {Platform.OS === 'ios' ?
         <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
           <TouchableWithoutFeedback onPress={this.toggleVisible.bind(this)}>
             <View style={StyleSheet.flatten([style.button, style.height40, {width:  250}])}>
               <Text>{this.state.project}</Text>
             </View>
           </TouchableWithoutFeedback>
           {this.state.visible ? menu : <View/>}
         </View> : pick }
       </View>

       <Text style={StyleSheet.flatten([style.subheader, style.textCenter, style.margin7])}>Team Members</Text>
       <ScrollView style={{height: 120}}>
       <ListView
         dataSource={this.state.team}
         renderRow={(rowData) => <Text style={style.members}>{rowData}</Text>}>
       </ListView>
       </ScrollView>
       </View>
       <View style={style.container}>
       <Progress style={{width:250, margin: 7}} styleAttr="Horizontal" indeterminate={false} progress={this.state.hoursComp/this.state.courseHours}/>
       <Text style={StyleSheet.flatten([style.header, style.font15, style.margin7])}>Hours Completed: {this.state.hoursComp}</Text>
       <Text style={StyleSheet.flatten([style.header, style.font15, style.margin7])}>Class Average: {this.state.courseAvg}</Text>

       <ListView
         dataSource={this.state.work}
         renderRow={(rowData) =>
           <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}
             onPress={()=> this.navigate(rowData)}>
             <Text style={StyleSheet.flatten([style.buttonText])}>{this.displayData(rowData)}</Text>
           </TouchableHighlight>}
       />
       </View>
     </View>
   )}}

module.exports = Summary;
