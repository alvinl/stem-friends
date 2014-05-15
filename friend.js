
module.exports = function (steamID, relationshipStatus) {
  
  var isWhitelistEnabled  = this.configs['stem-friends'].whitelist.enabled,
      whitelist           = this.configs['stem-friends'].whitelist.users,
      isAutoacceptEnabled = this.configs['stem-friends'].autoaccept,
      isAdmin             = this.utils.isAdmin(steamID),
      bot                 = this.bot,
      log                 = this.log;

  // Only worry about new friend requests
  if (relationshipStatus !== 2) return;

  // Accept request if autoaccept is on, user is whitelisted
  // or user is an admin.
  if (isAdmin ||
    isAutoacceptEnabled ||
    isWhitelistEnabled && ~whitelist.indexOf(steamID)) {

    // Accept request
    bot.addFriend(steamID);

    log.info('[stem-friends] Added user:', steamID);

  }

};