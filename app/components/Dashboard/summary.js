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
  ProgressView,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  course: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    marginBottom: 10,
    marginTop: 10,
    width: 250,
    height: 55,
  },
  work : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    marginBottom: 4,
    marginTop: 4,
    width: 250,
    height: 40,
  },
  members : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    marginBottom: 4,
    marginTop: 4,
    width: 250,
    height: 30,
  }
});

const Progress = Platform.select({
  ios: () => require('ProgressView'),
  android: () => require('ProgressBarAndroid'),
})();

export default class Summary extends Component {
  constructor(props) {
    super(props);
    const dsTeam = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dsWork = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      team: dsTeam.cloneWithRows([
              'Ross Frank', 'Jagroop Hothi', 'Mustafa Camurcu', 'Charles Zheng', 'Joana  Vukatana'
              ]),
       work: dsWork.cloneWithRows([
                    'Oct 17: 1hr Direct Work','Oct 18: 2hr Group','Oct 19: 3hr Individual',
              ])
    };
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>Course</Text>
        <TouchableHighlight style={styles.course}>
          <Text style={{color: 'black', fontSize: 30}}>CS4500</Text>
        </TouchableHighlight>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>Team Members</Text>
        <ListView
          dataSource={this.state.team}
          renderRow={(rowData) => <Text style={styles.members}>{rowData}</Text>}>
        </ListView>
        <Progress style={{width:250}} styleAttr="Horizontal" indeterminate={false} progress={.5}/>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>Hours Completed: 6</Text>
        <Text style={{color: 'black', fontSize: 20}}>Class Average: 7.2</Text>
        <ListView
          dataSource={this.state.work}
          renderRow={(rowData) => <TouchableHighlight style={styles.work}><Text>{rowData}</Text></TouchableHighlight>}
        />
      </View>
    )
  }
}
module.exports = Summary;
//TODO Calculate Hours Completed
      //TODO Get progress bar
