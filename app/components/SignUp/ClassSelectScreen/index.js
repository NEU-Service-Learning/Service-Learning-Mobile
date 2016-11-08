import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from '../searchTable'
import SearchBar from './searchBar'

// Dummy data
var classes = [
  {
    classNum: 'CS 4500',
    name: 'Software dev',
    prof: 'Wientraub',
    projects: ['Mobile Time Tracker', 'Back-end Service-Learning', 'Front-end Service-Learning']
  },
  {
    classNum: 'ARTF 1122',
    name: 'Art and stuff',
    prof: 'Thorne',
    projects: ['Madison High School']
  },
  {
    classNum: 'PT 2568',
    name: 'Physical Therapy and stuff',
    prof: 'Parker',
    projects: ['Hospital Service']
  }
]

export default class ClassSelectScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {searchText: '', selectedClasses: []};
  }

  // Called when the search text changes and updates the state
  handleInput(searchText) {
    this.setState({searchText});
  }

  // Called when a new class is added by clicking on it
  // Appends the class to the list of added classes in the state
  onAddClass(addedClass) {
    const classes = [...this.state.selectedClasses, addedClass]
    this.setState({selectedClasses: classes});
  }

  // Called when a added class is removed
  // Updates the state to remove the given class from the list of added classes
  onRemoveClass(removedClass) {
    addedClasses = this.state.selectedClasses.filter((selectedClass) => {
       return selectedClass != removedClass
    });
    this.setState({selectedClasses: addedClasses});
  }

  // add is a boolean flag if you want the 'add' button/text or the 'remove' button/text
  // onClickFn is a function that represents what happens after the user clicks the action
  // Retuns a function that takes a class and returns a single row on how to render that class
  renderRow(add, onClickFn) {
      return (someClass) => {
        return (
          <SearchRow
              onClicked={onClickFn}
              header={someClass.classNum + " - " + someClass.name}
              subHeader={someClass.prof}
              data={someClass}
              key={someClass.name}
              type={add}/>
            )
        }
    }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigate() {
    const projects = this.state.selectedClasses.reduce((addedProjects, selectedClass) => {
      return [...addedProjects, ...selectedClass.projects];
    }, []);
    this.props.navigator.push({
      title: 'SelectProject',
      // extras is used to pass data to the next screen.
      // the data gets placed in the props of the Component
      extras: {
        projects: projects
      }
    })
  }

  render() {
    const shownClasses = classes.filter((classData) => {
      var show = this.state.searchText.length != 0 &&
       classData.classNum.toLowerCase().includes(this.state.searchText.toLowerCase()) &&
       !this.state. selectedClasses.includes(classData);
       return show;
    });
    return (
      <View style={styles.container}>
        <SearchBar
          filterText={this.state.searchText}
          onChangeText={this.handleInput.bind(this)}/>
        <SearchTable
          data={shownClasses}
          header="Avaliable Classes"
          row={this.renderRow(true, this.onAddClass.bind(this))}
          />
          <SearchTable
            data={this.state.selectedClasses}
            header="Added Classes"
            row={this.renderRow(false, this.onRemoveClass.bind(this))}
            />
          <View style={styles.next} >
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
    justifyContent: 'space-between'
  },
  next: {
    flexDirection: 'row',
    justifyContent:'flex-end',
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
