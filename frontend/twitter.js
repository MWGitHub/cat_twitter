var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');
var TweetCompose = require('./tweet_compose');
$(function () {
  $(".follow-toggle").each(function (index, element) {
    var followToggle = new FollowToggle($(element));
  });
  $(".users-search").each(function (index, element) {
    var userSearch = new UsersSearch($(element));
  });
  $(".tweet-compose").each(function(index, element) {
    var tweetCompose = new TweetCompose($(element));
  });
});
