import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Picker, Platform, TouchableHighlight } from 'react-native';

var style = require('../../styles/styles');

export default class InfoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', college: '', gradYear: ''};
  }

  // Used to move to the next screen
  navigate() {
    this.props.navigator.push({
      title: 'SelectClass'
    })
  }

  render() {
    return (
      <View style={StyleSheet.flatten([style.container, style.margin16])}>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>First Name</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : style.textCenter}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.username}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>Last Name</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : style.textCenter}
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.username}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>College</Text>
          <Picker
            selectedValue={this.state.college}
            onValueChange={(college) => this.setState({college: college})}>
            <Picker.Item label="College of Science" value="College of Science" />
            <Picker.Item label="College of Computer and Information Science" value="College of Computer and Information Science" />
            <Picker.Item label="College of Engineering" value="College of Engineering" />
            <Picker.Item label="College of Arts, Media and Design" value="College of Arts, Media and Design" />
          </Picker>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>Graduation Year</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : style.textCenter}
          onChangeText={(gradYear) => this.setState({gradYear})}
          value={this.state.username}
          />
        </View>
        <View style={StyleSheet.flatten([style.nav])}>
          <View style={StyleSheet.flatten([style.back])}>
            <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}  onPress={() => this.props.navigator.pop()}>
              <Text style={StyleSheet.flatten([style.buttonText])}> Back </Text>
            </TouchableHighlight>
          </View>
            <View style={StyleSheet.flatten([style.next])}>
              <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}  onPress={() => this.navigate()}>
                <Text style={StyleSheet.flatten([style.buttonText])}> Next </Text>
                </TouchableHighlight>
                </View>
      </View>
    </View>
    );
  }
}
