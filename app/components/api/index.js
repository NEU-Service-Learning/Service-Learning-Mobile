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
  getSectionsForCourse: async function(courseId) {
    let response = await fetch(domain + '/course/' + courseId +'/sections');
    let responseJson = await response.json();
    return responseJson;
  },
  getCommunityPartner: async function(partnerId) {
    let response = await fetch(domain + '/communityPartner/' + partnerId);
    let responseJson = await response.json();
    return responseJson;
  },
  getRecord: async function(recordId) {
    let response = await fetch(domain + '/record/' + recordId);
    let responseJson = await response.json();
    return responseJson;
  },
  getRecordsForUser: async function(userId) {
    let response = await fetch(domain + '/record/user/' + userId);
    let responseJson = await response.json();
    return responseJson;
  },
  createRecord: async function(project, date, startTime, hours, category, notes) {
    let response = await fetch(domain + '/record/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enrollment: 1,
        project: project,
        date: date,
        start_time: startTime,
        total_hours: hours,
        longitude: 0,
        latitude: 0,
        category: category,
        is_active: true,
        comments: notes,
        extraFields: null
      })
    })

    let responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
    return responseJson;
  },
}
