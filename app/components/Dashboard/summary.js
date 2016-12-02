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
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';

var style = require('../../styles/styles');

const Progress = (Platform.OS == 'ios') ? ProgressViewIOS : ProgressBarAndroid;

export default class Summary extends Component {
  constructor(props) {
    super(props);
    var dsTeam = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dsWork = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      team: dsTeam.cloneWithRows([
              'Ross Frank', 'Jagroop Hothi', 'Mustafa Camurcu', 'Charles Zheng', 'Joana  Vukatana'
              ]),
       work: dsWork.cloneWithRows([
                    'Oct 17: 1hr Direct Work','Oct 18: 2hr Group','Oct 19: 3hr Individual',
              ]),
      project: 'Time Tracker',
      projects: [{label:'Time Tracker', key:'0'},
                      {label:'Project 1', key:'1'},
                      {label:'Project 2', key:'2'}]
    }
  }
    navigate() {
     this.props.navigator.push({
       title: 'Details'
     })
  }
  render() {
    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
        <Text style={StyleSheet.flatten([style.header, style.font30])}>Project</Text>
        <Picker
          style={StyleSheet.flatten([style.button, style.height55, {width:  250}])}
          selectedValue={this.state.project}
          onValueChange={(proj) => this.setState({project: proj})}>
          {this.state.projects.map((proj) => (
            <Picker.Item key={proj.key} label={proj.label} value={proj.label}/>)) }
        </Picker>
        <Text style={StyleSheet.flatten([style.header, style.font25])}>Team Members</Text>
        <ListView
          dataSource={this.state.team}
          renderRow={(rowData) => <Text style={style.members}>{rowData}</Text>}>
        </ListView>
        <Progress style={{width:250}} styleAttr="Horizontal" indeterminate={false} progress={.5}/>
        <Text style={StyleSheet.flatten([style.header, style.font30])}>Hours Completed: 6</Text>
        <Text style={style.font20}>Class Average: 7.2</Text>
        <ListView
          dataSource={this.state.work}
          renderRow={(rowData) =>
            <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}
              onPress={()=> this.navigate(rowData)}>
              <Text style={style.text}>{rowData}</Text>
            </TouchableHighlight>}
        />
      </View>
    )
  }
}
module.exports = Summary;
