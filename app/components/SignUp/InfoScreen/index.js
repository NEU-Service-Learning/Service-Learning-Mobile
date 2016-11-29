import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Picker, TouchableHighlight } from 'react-native';

var style = require('../../../Styles/styles');

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
          style={style.textCenter}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.username}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>Last Name</Text>
          <TextInput
          style={style.textCenter}
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.username}
          />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>College</Text>
          <Picker
            selectedValue={this.state.college}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="College of Science" value="College of Science" />
            <Picker.Item label="College of Computer and Information Science" value="College of Computer and Information Science" />
            <Picker.Item label="College of Engineering" value="College of Engineering" />
            <Picker.Item label="College of Arts, Media and Design" value="College of Arts, Media and Design" />
          </Picker>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>Graduation Year</Text>
          <TextInput
          style={style.textCenter}
          onChangeText={(gradYear) => this.setState({gradYear})}
          value={this.state.username}
          />
        </View>
        <View style={StyleSheet.flatten([style.imputContainer, style.alignCenter])}>
          <TouchableHighlight style={style.button}  onPress={() => this.navigate()}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Next </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
