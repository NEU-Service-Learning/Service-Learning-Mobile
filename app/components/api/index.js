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
  }
}
