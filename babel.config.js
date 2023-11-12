module.exports = {
  presets: ["babel-preset-expo", 'module:metro-react-native-babel-preset'],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
    [require.resolve("expo-router/babel"), { allowTopLevelThis: true }]
  ]
};
