import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, ActivityIndicator, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from '../searchTable'
import SearchBar from './searchBar'
import api from '../../api/index'
import style from '../../../Styles/styles'



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
    this.state = {loading: true, searchText: '', error: false, classes: [], selectedClasses: []};
  }

  componentWillMount = async () => {
  try {
    const classes = await api.getClasses();
    console.log(classes);
    this.setState({loading: false, classes: classes});
  } catch (e) {
    this.setState({loading: false, error: true})
  }
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
              header={someClass.id + " - " + someClass.name}
              subHeader={"Department: " + someClass.department}
              data={someClass}
              key={someClass.id}
              type={add}/>
            )
        }
    }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigate() {
    this.props.navigator.push({
      title: 'SelectProject',
      // extras is used to pass data to the next screen.
      // the data gets placed in the props of the Component
      extras: {
        classes: this.state.selectedClasses
      }
    })
  }

  back() {
    this.props.navigator.pop();
  }

  render() {
    const shownClasses = this.state.classes.filter((classData) => {
      var show = this.state.searchText.length != 0 &&
       classData.name.toLowerCase().includes(this.state.searchText.toLowerCase()) &&
       !this.state.selectedClasses.includes(classData);
       return show;
    });
    if(this.state.loading) {
        return(
        <View style={[style.container, style.alignCenter]}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
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
          <View style={styles.nav} >
            <View style={styles.back}>
              <TouchableHighlight style={styles.button}  onPress={() => this.back()}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> Back </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.next}>
              <TouchableHighlight style={styles.button}  onPress={() => this.navigate()}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> Next </Text>
              </TouchableHighlight>
            </View>
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
  nav: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  back: {
    justifyContent:'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  next: {
    justifyContent:'flex-end',
    flexDirection: 'row',
    flex: 1
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
