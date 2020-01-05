module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require.resolve("ts-loader"),
        options: {
          transpileOnly: true
        }
      }
    ]
  });
  config.resolve.alias["react-native$"] = "react-native-web";
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
