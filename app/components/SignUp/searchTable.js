import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={[styles.table, this.props.style]}>
      <Text style={styles.header}>{this.props.header}</Text>
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
    var type = this.props.type ? (<Icon size={32} color="green" name="plus-square" onPress={() => this.props.onClicked(this.props.data)}></Icon>)
    : (<Icon size={32} color="red" name="minus-square" onPress={() => this.props.onClicked(this.props.data)}></Icon>)
    return(
      <View style={styles.row}>
        <View style={styles.rowHeader}>
          <Text style={styles.headerText}>{this.props.header}</Text>
          <Text style={styles.subHeaderText}>{this.props.subHeader}</Text>
        </View>
        <TouchableOpacity style={{marginRight: 4}} onPress={() => this.props.onClicked(this.props.data)}>
          {type}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    backgroundColor:'teal',
    borderRadius: 24,
    marginBottom: 10,
    padding: 10
  },
  header: {
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  row: {
    backgroundColor:'skyblue',
    padding: 4,
    flexDirection:'row',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    height: 50
  },
  rowHeader: {
    flexDirection: 'column',
    flex: 1
  },
  headerText: {
    flex: 2,
    fontSize: 14,
    color: 'teal',
    fontWeight: 'bold'

  },
  subHeaderText: {
    flex: 1,
    fontSize: 13,
    color: 'teal',
    fontWeight: 'bold'

  }
});
