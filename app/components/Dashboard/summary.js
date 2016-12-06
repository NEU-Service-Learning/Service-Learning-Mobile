'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ListView,
  TouchableHighlight,
  ProgressBarAndroid,
  ProgressViewIOS,
  Picker,
  ScrollView,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';
import api from '../api/index';

var style = require('../../styles/styles');

var dsTeam = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var dsWork = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Progress = (Platform.OS == 'ios') ? ProgressViewIOS : ProgressBarAndroid;

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: dsTeam.cloneWithRows([
              'Ross Frank', 'Jagroop Hothi', 'Mustafa Camurcu', 'Charles Zheng', 'Joana  Vukatana'
              ]),
      work: dsWork.cloneWithRows([
                    'Oct 17: 1hr Direct Work','Oct 18: 2hr Group','Oct 19: 3hr Individual',
              ]),
      projects: [{label:'Time Tracker', key:'0'},
                      {label:'Project 1', key:'1'},
                      {label:'Project 2', key:'2'}],
      project: {label:'Time Tracker', key:'0'},
    }
  }

  componentDidMount = async () => {
  try {
    const records = await api.getRecordsForUser(25);
    let recordNames = records.map((record) => {
      return '' + record.date + ': ' + record.total_hours + 'hrs work';
    });

    this.setState({work: dsWork.cloneWithRows(recordNames)});
  } catch (e) {
    this.setState({loading: false, error: true})
    }
  }
  navigate(rowData) {
    this.props.navigator.push({
      title: 'Details',
      extras: {key: rowData.key},
    })
  }
  render() {
    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
       <Text style={StyleSheet.flatten([style.subheader, style.font15, style.margin7])}>Project</Text>
       <Picker
         style={StyleSheet.flatten([style.button, style.height40, {width:  250}])}
         selectedValue={this.state.project}
         onValueChange={(proj) => this.setState({project: proj})}>
         {this.state.projects.map((proj) => (<Picker.Item key={proj} label={proj.label} value={proj}/>)) }
       </Picker>
       <Text style={StyleSheet.flatten([style.subheader, style.font15, style.margin7])}>Team Members</Text>
       <ScrollView>
       <ListView
         dataSource={this.state.team}
         renderRow={(rowData) => <Text style={style.members}>{rowData}</Text>}>
       </ListView>
       </ScrollView>
       <Progress style={{width:250, margin: 7}} styleAttr="Horizontal" indeterminate={false} progress={.5}/>
       <Text style={StyleSheet.flatten([style.header, style.font15, style.margin7])}>Hours Completed: 6</Text>
       <Text style={StyleSheet.flatten([style.header, style.font15, style.margin7])}>Class Average: 7.2</Text>
       <ListView
         dataSource={this.state.work}
         renderRow={(rowData) =>
           <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}
             onPress={()=> this.navigate(rowData)}>
             <Text style={StyleSheet.flatten([style.buttonText])}>{rowData}</Text>
           </TouchableHighlight>}
       />
     </View>
   )}}

module.exports = Summary;
