'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  alignCenter: {
    alignItems: 'center'
  },
  margin16: {
    margin: 16
  },
  text: {
    color: '#9ACD32',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#708090',
    borderRadius: 64,
    marginBottom: 4,
    marginTop: 4,
    width: 250,
  },
  members : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    marginBottom: 1,
    marginTop: 1,
    width: 250,
    height: 30,
  },
  height55 : {
    height: 55,
    marginBottom: 10,
    marginTop: 10
  },
  height40 : {
    height: 40,
  },
  height30 : {
    height: 30,
  },
  header : {
    color: 'black',
    fontWeight: 'bold'
  },
  font30 : {
    fontSize: 30
  },
  font25: {
    fontSize:25
  },
  font20: {
    fontSize:20
  },
});
