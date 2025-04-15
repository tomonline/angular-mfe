const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-shell',

  remotes: {
    "mfe1": "http://localhost:4201/remoteEntry.js",    
  },

  exposes: {
    './AuthService': './src/app/services/auth.service.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
