import {AsyncStorage} from 'react-native';
const AUTHKEY = 'authKey';
const USER = 'user';
module.exports = {
  saveAuthKey: async function(authKey) {
    return await AsyncStorage.setItem(AUTHKEY, authKey);
  },
  getAuthKey: async function() {
    return await AsyncStorage.getItem(AUTHKEY);
  },
  removeAuthKey: async function() {
    return await AsyncStorage.removeItem(AUTHKEY);
  },
  saveUser: async function(user) {
    return await AsyncStorage.setItem(USER, JSON.stringify(user));
  },
  getUser: async function() {
    let data = await AsyncStorage.getItem(USER);
    return JSON.parse(data);
  }
}
