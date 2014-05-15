
module.exports = function (Stem) {

  var bot          = Stem.bot,
      pluginConfig = Stem.configs['stem-friends'];

  // Validate plugin config
  if (pluginConfig.whitelist.enabled && pluginConfig.autoaccept) {

    throw new Error('Autoaccept and whitelist cannot both be enabled');

  }

  Stem.utils.addHandler(bot, 'relationships', require('./relationships'));

  Stem.utils.addHandler(bot, 'friend', require('./friend'));
  
};