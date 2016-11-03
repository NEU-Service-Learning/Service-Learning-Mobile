import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

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
      <View style={styles.table}>
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
    var type = this.props.type ? 'Add' : 'Remove'
    return(
      <View style={styles.row}>
        <View style={styles.rowHeaderText}>
          <Text style={styles.headerText}>{this.props.header}</Text>
          <Text style={styles.subHeaderText}>{this.props.subHeader}</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.onClicked(this.props.data)}>
          <Text>{type}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    backgroundColor:'teal',
    borderRadius:6,
    marginBottom: 10,
    padding: 10
  },
  header: {
    marginBottom: 5,
    fontSize: 18
  },
  row: {
    backgroundColor:'skyblue',
    padding: 4,
    flexDirection:'row',
    borderRadius: 10,
    marginBottom: 5,
    height: 50
  },
  rowHeaderText: {
    flexDirection: 'column',
    flex: 1
  },
  headerText: {
    flex: 2,
    fontSize: 14
  },
  subHeaderText: {
    flex: 1,
    fontSize: 13
  }
});
