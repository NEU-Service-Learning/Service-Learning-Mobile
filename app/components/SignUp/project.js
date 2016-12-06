import React, { Component } from 'react';
import {StyleSheet, View, Text, ActivityIndicator, TouchableHighlight } from 'react-native';

import {SearchTable, SearchRow} from './searchTable';
import api from '../api/index';
import storage from '../api/storage'

var style = require('../../styles/styles');

export default class ProjectSelectScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {error: false, loading: true, projects: [], selectedProjects: []}
  }

  componentDidMount() {
  try {
    let projects = [];
    let promises = this.props.classes.map((someClass) => {
      return api.getProjectForCourse(someClass.id);
    });
    Promise.all(promises)
    .then((data) => {
      // Push all the projects into a single array
      data.forEach((classProjects) => {
        classProjects.forEach((project) => {
          projects.push(project);
        });
      });
      // Request the community Partner data
      var communityPromises = projects.map((project) => {
        return api.getCommunityPartner(project.community_partner);
      });
      return Promise.all(communityPromises);
    })
    .then((communityPartnerData) => {
      communityPartnerData.forEach((partner, index) => {
        projects[index].communityPartner = partner;
      });
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
        return(
          <SearchRow
              onClicked={onClickFn}
              header={someProj.name}
              subHeader={someProj.communityPartner.name}
              data={someProj}
              key={someProj.id}
              type={add}/>
          );
      }
    }

  updateUser = async function() {
    try {
      const authKey = await storage.getAuthKey();
      const user = await api.getUserFromAuthKey(authKey);
      this.setState({loading: true});
      var courses = this.props.classes.map((someClass) => {
        return someClass.id;
      });
      const body = await api.updateUser(user.id, courses, this.state.selectedProjects);
      console.log(body);
      this.navigate();

    } catch (e) {
      console.log(e + "error");
      this.setState({loading: false, error: true})
    }
  }

  // For now just goes to Dashboard
  navigate() {
   this.props.navigator.resetTo({
     title: 'Dashboard'
   });
  }

  render() {
    const shownProjects = this.state.projects.filter((project) => {
       return !this.state.selectedProjects.includes(project);
    });
    if(this.state.loading) {
        return(
        <View style={[style.container, style.alignCenter]}>
          <ActivityIndicator animating={true} />
          <Text>Loading Service-Learning Projects</Text>
        </View>
      )
    }
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
