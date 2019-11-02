module.exports = function exports(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: ['@babel/transform-arrow-functions', '@babel/transform-react-jsx-source'],
  };
};
