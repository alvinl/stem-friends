
module.exports = function () {
  
  var isWhitelistEnabled  = (this.configs['stem-friends'].whitelist) ? 
                            this.configs['stem-friends'].whitelist.enabled : 
                            false,
      whitelist           = (this.configs['stem-friends'].whitelist) ? 
                            this.configs['stem-friends'].whitelist.users : 
                            [],
      isAutoacceptEnabled = this.configs['stem-friends'].autoaccept,
      bot                 = this.bot,
      log                 = this.log,
      Stem                = this;

  // Handle pending friend requests
  for (var friend in bot.friends) {

    var isAdmin      = Stem.api.isAdmin(friend),
        friendStatus = bot.friends[friend];

    // Skip non-pending requests
    if (friendStatus !== 2) continue;

    // Accept request if autoaccept is on, user is whitelisted
    // or user is an admin.
    if (isAdmin ||
      isAutoacceptEnabled ||
      isWhitelistEnabled && ~whitelist.indexOf(friend)) {

      // Accept request
      bot.addFriend(friend);

      log.info('[stem-friends] Added user:', friend);

    }

  }

};