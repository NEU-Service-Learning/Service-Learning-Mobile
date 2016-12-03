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
} from 'react-native';

import TimeFormatter from 'minutes-seconds-milliseconds';
import { Title, Icon, Header, Card, CardItem, Button } from 'native-base';

export default class AutoTracking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      startTime: new Date(),
      endTime: null,
      timer: null,
    }
    this.handleStartStop();
  }

  start() {
    this.setState({timerStart: new Date()});

    this.interval = setInterval(() => {
      this.setState({
        timer: new Date() - this.state.timerStart,
        isRunning: true,
      });
    }, 30);
  }

  stop() {
    clearInterval(this.interval);
    this.setState({isRunning: false});
    return;
  }

  handleStartStop() {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({isRunning: false});
      return;
    }

    this.setState({timer: new Date()});

    this.interval = setInterval(() => {
      this.setState({
        timer: new Date() - this.state.startTime,
        isRunning: true,
      });
    }, 30);

  }

  stop() {
    this.handleStartStop();
    this.props.onStop(this.state.startTime, new Date());
  }

  render() {
    return(
      <Card style = {styles.card}>
        <CardItem>
          <Text>Time Worked</Text>

          <View style={styles.container}>
            <Text style={styles.timer}>{ TimeFormatter(this.state.timer) }</Text>
          </View>

        </CardItem>
        <CardItem style={{flexDirection:'row', justifyContent: 'flex-end'}}>
          <Button onPress={this.stop.bind(this)}
                  style={{flex: 1}}>Clock Out</Button>
        </CardItem>
      </Card>
    )
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
  },
  timer: {
    fontSize: 50,
    fontWeight: '100',
    alignSelf: 'center',
  }
});
