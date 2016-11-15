import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Picker, TouchableHighlight } from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
          style={styles.input}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last Name</Text>
          <TextInput
          style={styles.input}
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>College</Text>
          <Picker
            selectedValue={this.state.college}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="College of Science" value="College of Science" />
            <Picker.Item label="College of Computer and Information Science" value="College of Computer and Information Science" />
            <Picker.Item label="College of Engineering" value="College of Engineering" />
            <Picker.Item label="College of Arts, Media and Design" value="College of Arts, Media and Design" />
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Graduation Year</Text>
          <TextInput
          style={styles.input}
          onChangeText={(gradYear) => this.setState({gradYear})}
          value={this.state.username}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}  onPress={() => this.navigate()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}> Next </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent : 'center'
  },
  inputContainer: {
    margin: 15,
    justifyContent : 'center',
  },
  buttonContainer: {
    margin: 30,
    justifyContent : 'center',
    alignItems: 'center'
  },
  input: {
    textAlign : 'center'
  },
  text: {
    textAlign : 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    width: 100,
    height: 40
  }
});
