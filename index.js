
module.exports = function (Stem) {

  var commands         = require('./commands'),
      pluginConfig     = Stem.configs['stem-friends'],
      whitelistEnabled = (pluginConfig.whitelist) ? pluginConfig.whitelist.enabled : false;

  // Validate plugin config
  if (whitelistEnabled && pluginConfig.autoaccept) {

    throw new Error('Autoaccept and whitelist cannot both be enabled');

  }

  /**
   * Register commands
   */
  
  Stem.api.addCommand('add friend', commands.addFriend, 1);

  Stem.api.addCommand('remove friend', commands.removeFriend, 1);

  /**
   * Register handlers
   */

  Stem.api.addHandler('bot', 'relationships', require('./handlers/relationships'));

  Stem.api.addHandler('bot', 'friend', require('./handlers/friend'));
  
};