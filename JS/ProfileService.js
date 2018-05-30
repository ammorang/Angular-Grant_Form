"use strict";

function ProfileService($location) {
  let userProfile = {
    name: "Grant Chirpus", 
    contactInfo: "grant@grandcircus.co",
    bio: "I am pretty cool. I do a great job. I like to play Tetris. I am pretty ok at AngularJS."
  };
  const getUserProfile = (user) => {
    userProfile = user;
    $location.path("/profilePage");
  };
  const setUserProfile = () => {
    return userProfile
  }
  return {
    getUserProfile,
    setUserProfile
  };
}

angular
  .module("app")
  .factory("ProfileService", ProfileService);