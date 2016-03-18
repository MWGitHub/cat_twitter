var FollowToggle = require('./follow_toggle');

var UsersSearch = function ($el) {
  this.$el = $el;
  this.$usersList = $el.find(".users-list");
  this.$usersField = $el.find(".users-search-field");
  this.$usersField.on('input', this.handleInput.bind(this));
  this.$usersField.trigger('input');
};

UsersSearch.prototype.handleInput = function (e) {
  e.preventDefault();

  var val = this.$usersField.val();
  var that = this;
  $.ajax({
    type: 'GET',
    url: '/users/search?query=' + val,
    dataType: 'json',
    success: function (data) {
      that.$usersList.empty();
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var user = data[i];
        var $li = $("<li></li>");
        $li.append("<a href='/users/" + user.id + "'>" + user.username + "</a>");
        var $followButton = $([
          '<button class="follow-toggle" id="follow-toggle-button" data-initial-follow-state="',
          user.followed + '" data-user-id="' + user.id + '"></button>'
        ].join(''));
        new FollowToggle($followButton);
        $li.append($followButton);
        that.$usersList.append($li);
      }
    }
  });
};


module.exports = UsersSearch;
