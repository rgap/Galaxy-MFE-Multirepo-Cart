const { dependencies } = require('../package.json');

module.exports = {
  name: 'cart',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
    './CartContext': './src/context/CartContext',
    './CartWidget': './src/components/CartWidget',
    './useCart': './src/context/CartContext'
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
      eager: true
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
      eager: true
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
      eager: true
    }
  },
}; 