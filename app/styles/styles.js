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
  margin7: {
    margin: 7,
  },
  alignCenter: {
    alignItems: 'center'
  },
  inputContainer: {
    margin: 20,
    justifyContent : 'center',
  },
  text: {
    color: '#708090',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BCEE68',
    borderRadius: 60,
    marginBottom: 7,
    marginTop: 7,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonWidth: {
    width: 250,
  },
  members : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    marginTop: 1,
    width: 250,
    height: 20,
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
    color: '#FF7F00',
    fontWeight: 'bold',
    fontSize:20
  },
  subheader : {
    color: '#878787',
    fontWeight: 'bold',
    fontSize:15
  },
  font20: {
    fontSize:20
  },
  font15: {
    fontSize:15
  },
  font10: {
    fontSize:10
  },
  textCenter: {
    textAlign : 'center'
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
  table: {
    flex: 1,
    backgroundColor:'#878787',
    borderRadius: 24,
    marginBottom: 10,
    padding: 10
  },
  tableHeader: {
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  row: {
    backgroundColor:'#BCEE68',
    padding: 4,
    flexDirection:'row',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    height: 50
  },
  rowHeader: {
    flexDirection: 'column',
    flex: 1
  },
  tableHeaderText: {
    flex: 2,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'

  },
  tableSubHeaderText: {
    flex: 1,
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold'
  }
});
