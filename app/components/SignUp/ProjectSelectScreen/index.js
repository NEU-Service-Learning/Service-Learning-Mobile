import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from '../searchTable'


export default class ProjectSelectScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedProjects: []}
  }

  // Adds a project to the state when clicked
  onAddProject(addedProjct) {
    const projects = [...this.state.selectedProjects, addedProjct]
    this.setState({selectedProjects: projects});
  }

  // removes an added project from the state
  onRemoveProject(removedProject) {
    const projects = this.state.selectedProjects.filter((project) => {
       return project != removedProject
    });
    this.setState({selectedProjects: projects});
  }

  // Renders a given project's row in the table
  renderRow(add, onClickFn) {
      return  (someProj) => {
        return(
          <SearchRow
              onClicked={onClickFn}
              header={someProj}
              data={someProj}
              key={someProj}
              type={add}/>
          );
      }
    }

  // For now just goes to Dashboard
  navigate() {
   this.props.navigator.push({
     title: 'Dashboard'
   })
  }

  render() {
    const shownProjects = this.props.projects.filter((project) => {
       return !this.state.selectedProjects.includes(project);
    });
    return(
      <View style={styles.container}>
        <SearchTable
          data={shownProjects}
          header="Avaliable Projects"
          row={this.renderRow(true, this.onAddProject.bind(this))} />
        <SearchTable
          data={this.state.selectedProjects}
          header="Added Projects"
          row={this.renderRow(false, this.onRemoveProject.bind(this))} />
        <View style={styles.next} >
          <TouchableHighlight style={styles.button}  onPress={() => this.navigate()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}> Finish </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    paddingTop: 24,
    justifyContent: 'space-between',
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
