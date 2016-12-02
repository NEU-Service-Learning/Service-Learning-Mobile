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
  margin16: {
    margin: 16,
  },
  alignCenter: {
    alignItems: 'center'
  },
  inputContainer: {
    margin: 30,
    justifyContent : 'center',
  },
  text: {
    color: '#708090',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ACD32',
    borderRadius: 64,
    marginBottom: 4,
    marginTop: 4,
    padding: 10,
  },
  buttonWidth: {
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
  height50 : {
    height: 50,
    alignSelf: 'center'
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
  textCenter: {
    textAlign : 'center'
  },
  next: {
    flexDirection: 'row',
    justifyContent:'flex-end',
  }
});
