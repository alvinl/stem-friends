Stem friends
===================

### Installation

1. `npm install git://github.com/alvinl/stem-friends.git`
2. Add `"stem-friends": {}` to plugins.json

### Commands

- `add / remove friend <steamID>` Adds or removes a friend

### Config

```json
{

  "stem-friends": {

    "whitelist": {

      "enabled": false,
      "users": ["steamID1", "steamID2"]

    },
    
    "autoaccept": true

  }

}

```

- `whitelist`
  - `enabled` Toggles whitelist functionality
  - `users` Array of whitelisted steamID's
- `autoaccept` Whether or not to autoaccept all friend requests
- Whitelist and autoaccept cannot both be enabled.