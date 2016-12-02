import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var style = require('../../Styles/styles');

export class SearchTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rowRender = this.props.row;
    var rows = this.props.data.map((piece) => {
      return rowRender(piece);
    });
    return(
      <View style={StyleSheet.flatten([style.table, this.props.style])}>
      <Text style={StyleSheet.flatten([style.buttonText])}>{this.props.header}</Text>
      <ScrollView>
        {rows}
      </ScrollView>
      </View>
    )
  }
}

export class SearchRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var type = this.props.type ? (<Icon size={30} color="#FF7F00" name="plus-square" onPress={() => this.props.onClicked(this.props.data)}></Icon>)
    : (<Icon size={30} color="#FF7F00" name="minus-square" onPress={() => this.props.onClicked(this.props.data)}></Icon>)
    return(
      <View style={StyleSheet.flatten([style.row])}>
        <View style={StyleSheet.flatten([style.rowHeader])}>
          <Text style={StyleSheet.flatten([style.tableHeaderText])}>{this.props.header}</Text>
          <Text style={StyleSheet.flatten([style.tableSubHeaderText])}>{this.props.subHeader}</Text>
        </View>
        <TouchableOpacity style={{marginRight: 4}} onPress={() => this.props.onClicked(this.props.data)}>
          {type}
        </TouchableOpacity>
      </View>
    )
  }
}
