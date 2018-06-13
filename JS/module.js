"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/editProfile", {
        template: "<edit-profile></edit-profile>"
      })
      .when("/profilePage", {
        template: "<profile-page></profile-page>"
      })
      .otherwise("/profilePage");
  });