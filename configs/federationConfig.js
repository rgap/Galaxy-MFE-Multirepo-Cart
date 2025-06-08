const { dependencies } = require('../package.json');

module.exports = {
  name: 'cart',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
    './CartContext': './src/context/CartContext',
    './CartWidget': './src/components/CartWidget',
    './useCart': './src/hooks/useCart'
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
    },
    'common-components-react': {
      singleton: true,
      requiredVersion: dependencies['common-components-react'],
    }
  },
}; 