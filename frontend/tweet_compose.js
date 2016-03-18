var TweetCompose = function ($el) {
  this.$el = $el;
  this.$el.on('submit', this.submit.bind(this));
};

TweetCompose.prototype.submit = function (e) {
  e.preventDefault();
  this.$el.find(":input").prop("disabled", true);
  var that = this;
  var data = {
    tweet: {
      content: this.$el.find(".tweet-content").val(),
      mentioned_user_ids: this.$el.find(".tweet-buddies").val()
    }
  };
  $.ajax({
    type: 'POST',
    url: '/tweets',
    dataType: 'json',
    data: data,
    success: that.handleSuccess.bind(that),
    error: function() {
      that.$el.find(":input").prop("disabled", false);
    }
  });

};
TweetCompose.prototype.handleSuccess = function (data) {
  console.log(data);
  this.$el.find(":input").prop("disabled", false);
  this.$el[0].reset();
  var $feed = $(this.$el.data('tweets-ul'));
  var $li = $('<li>' + data.content + ' -- ' + data.user.username + '</li>');
  $feed.prepend($li);
};
module.exports = TweetCompose;
