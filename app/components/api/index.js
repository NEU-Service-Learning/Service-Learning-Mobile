const domain = 'http://ec2-54-147-212-27.compute-1.amazonaws.com/';

module.exports = {
  getClasses: async function() {
    let response = await fetch(domain + 'courses');
    let responseJson = await response.json();
    return responseJson;
  },
  getProjectForCourse: async function(courseId) {
    let response = await fetch(domain + '/course/' + courseId +'/projects');
    let responseJson = await response.json();
    return responseJson;
  },
  getAuthKey: async function(username, password) {
    let response = await fetch(domain + 'user/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });

    let responseJson = await response.json();
    return responseJson;
  },
  getUserFromAuthKey: async function(authKey) {
    let response = await fetch(domain + '/me/', {
      headers: {
        'Authorization': 'Token ' + authKey
      },
    });
    let responseJson = await response.json();
    return responseJson;
  }
}
