const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-route1',

  remotes: {
    "mfe-shell": "http://localhost:4200/remoteEntry.js",    
  },

  exposes: {
    './mfe-route' : './src/app/components/mfe-route/mfe-route.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
