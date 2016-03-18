var FollowToggle = function ($el) {
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data('initial-follow-state') ? "followed" : "unfollowed";

  this.render();
  this.$el.on('click', this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el[0].innerHTML = "Follow";
  } else {
    this.$el[0].innerHTML = "Unfollow";
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var method = this.followState === 'followed' ? 'DELETE' : 'POST';
  this.$el.prop("disabled", true);
  var that = this;
  $.ajax({
    type: method,
    url: '/users/' + this.userId + '/follow',
    dataType: 'json',
    success: function (data) {
      if (method === 'POST') {
        that.followState = "followed";
      } else {
        that.followState = "unfollowed";
      }
      that.render();
      that.$el.prop("disabled", false);
    },
    error: function () {
      alert("Ah, fuck. I can't believe you've done this.");
    }
  });
};

module.exports = FollowToggle;
