var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');
$(function () {
  $(".follow-toggle").each(function (index, element) {
    var followToggle = new FollowToggle($(element));
  });
  $(".users-search").each(function (index, element) {
    var userSearch = new UsersSearch($(element));
  });
});
