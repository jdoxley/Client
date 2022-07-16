const path = require('path');

module.exports = {
  packageerConfig: {
    icon: path.join(__dirname, 'icon.ico'),
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: path.join(__dirname, 'icon.ico'),
        setupIcon: path.join(__dirname, 'icon.ico'),
      },
    },
  ],
};
