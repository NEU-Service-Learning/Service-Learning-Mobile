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
    let response = await fetch(domain + 'user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "kename.f@husky.neu.edu",
        password: "123456abc",
      })
    });

    let responseJson = await JSON.stringify(response);
    console.log(responseJson);
    return responseJson;
  },
}
