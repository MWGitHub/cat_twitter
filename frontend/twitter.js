var FollowToggle = require('./follow_toggle');
$(function () {
  $(".follow-toggle").each(function (index, element) {
    var followToggle = new FollowToggle($(element));
  });
});
