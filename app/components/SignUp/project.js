import React, { Component } from 'react';
import {StyleSheet, View, Text, ActivityIndicator, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from './searchTable';
import api from '../../api/index';

var style = require('../../styles/styles');

export default class ProjectSelectScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {error: false, loading: true, projects: [], selectedProjects: []}
  }

  componentWillMount() {
  try {
    let projects = [];
    let promises = [];
    this.props.classes.forEach((someClass) => {
      var projectPromise = api.getProjectForCourse(someClass.id);
      promises.push(projectPromise);
    });
    Promise.all(promises).then((data) => {
      data.forEach((classProjects) => {
        classProjects.forEach((project) => {
          console.log(project)
          projects.push(project);
        })
      })
      this.setState({loading: false, projects: projects});
    });
  } catch (e) {
    this.setState({loading: false, error: true})
    }
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
        console.log(someProj)
        return(
          <SearchRow
              onClicked={onClickFn}
              header={someProj.name}
              subHeader={someProj.description}
              data={someProj}
              key={someProj.id}
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
    console.log("PR");
    console.log(this.state.projects);
    const shownProjects = this.state.projects.filter((project) => {
       return !this.state.selectedProjects.includes(project);
    });
    if(this.state.loading) {
        return(
        <View style={[style.container, style.alignCenter]}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
    return(
      <View style={StyleSheet.flatten([style.container, style.margin16])}>
        <SearchTable
          style={{marginTop: 38}}
          data={this.state.projects}
          header="Avaliable Projects"
          row={this.renderRow(true, this.onAddProject.bind(this))} />
        <SearchTable
          data={this.state.selectedProjects}
          header="Added Projects"
          row={this.renderRow(false, this.onRemoveProject.bind(this))} />
        <View style={StyleSheet.flatten([style.nav])}>
            <View style={StyleSheet.flatten([style.back])}>
              <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}  onPress={() => this.props.navigator.pop()}>
                <Text style={StyleSheet.flatten([style.buttonText])}> Back </Text>
              </TouchableHighlight>
            </View>
            <View style={StyleSheet.flatten([style.next])}>
              <TouchableHighlight style={StyleSheet.flatten([style.button, style.height40])}  onPress={() => this.navigate()}>
                <Text style={StyleSheet.flatten([style.buttonText])}> Finish </Text>
                </TouchableHighlight>
            </View>
          </View>
      </View>
    )
  }
}
