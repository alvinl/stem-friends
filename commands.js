
exports.addFriend = function (client, args) {
  
  var Stem           = this,
      isValidSteamID = this.api.validateSteamID(args[0]);

  if (!isValidSteamID)
    return Stem.bot.sendMessage(client, 'Invalid SteamID');

  // Send friend request
  Stem.bot.addFriend(args[0]);

  Stem.bot.sendMessage(client, 'Friend request sent');

};

exports.removeFriend = function (client, args) {
  
  var Stem           = this,
      isValidSteamID = this.api.validateSteamID(args[0]);

  if (!isValidSteamID)
    return Stem.bot.sendMessage(client, 'Invalid SteamID');

  // Remove friend
  Stem.bot.removeFriend(args[0]);

  Stem.bot.sendMessage(client, 'Friend removed');
  
};