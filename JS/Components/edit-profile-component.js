"use strict";

const editProfile = {
  template: `
  <form class="editform" ng-submit="$ctrl.update($ctrl.user);">
    <label class="info">Use the form below to update your profile.</label>
    <label>Name</label>
    <input type="text" ng-model="$ctrl.user.name">
    <label>Contact</label>
    <input type="text" ng-model="$ctrl.user.contactInfo">
    <label>Bio</label>
    <textarea type="text" rows="15" cols="20" ng-model="$ctrl.user.bio"></textarea>
    <button class="updatebtn">Update</button>
  </form>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.update = (user) => {
      ProfileService.setUserProfile(user);
    };
  }]
};

angular
  .module("app")
  .component("editProfile", editProfile);