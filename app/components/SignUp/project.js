import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from '../searchTable';

var style = require('../../styles/styles');

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
   });
  }

  render() {
    const shownProjects = this.props.projects.filter((project) => {
       return !this.state.selectedProjects.includes(project);
    });
    return(
      <View style={StyleSheet.flatten([style.container, style.margin16])}>
        <SearchTable
          style={{marginTop: 38}}
          data={shownProjects}
          header="Avaliable Projects"
          row={this.renderRow(true, this.onAddProject.bind(this))} />
        <SearchTable
          data={this.state.selectedProjects}
          header="Added Projects"
          row={this.renderRow(false, this.onRemoveProject.bind(this))} />
        <View style={styles.nav} >
            <View style={styles.back}>
              <TouchableHighlight style={style.button}  onPress={() => this.props.navigator.pop()}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> Back </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.next}>
              <TouchableHighlight style={style.button}  onPress={() => this.navigate()}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> Finish </Text>
              </TouchableHighlight>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
});
