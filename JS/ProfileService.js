"use strict";

function ProfileService($location) {
  let userProfile = {
    name: "Grant Chirpus", 
    contactInfo: "grant@grandcircus.co",
    bio: "I am pretty cool. I do a great job. I like to play Tetris. I am pretty ok at AngularJS."
  };
  const setUserProfile = (user) => {
    userProfile = user;
    $location.path("/profilePage");
  };
  const getUserProfile = () => {
    return userProfile
  }
  return {
    setUserProfile,
    getUserProfile
  };
}

angular
  .module("app")
  .factory("ProfileService", ProfileService);