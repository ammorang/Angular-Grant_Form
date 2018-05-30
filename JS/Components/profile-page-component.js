"use strict";

const profilePage = {
  template: `
  <div class="profile">
    <div class="grantpic"></div>
    <p class="gname"> {{ $ctrl.userData.name }} </p>
    <p class="gcontact"> {{ $ctrl.userData.contactInfo }} </p>
    <p class="gbio"> {{ $ctrl.userData.bio }} </p>
    <a href="#!/editProfile" class="editbtn">Edit</a>
  </div>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.userData = ProfileService.setUserProfile();
  }]
};

angular
  .module("app")
  .component("profilePage", profilePage);