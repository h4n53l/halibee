const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|jpg|mpeg|png|jpeg|gif|svg)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("file-loader"),
          options: {
            limit: config.inlineImageLimit,
            publicPath: `_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: false,
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMATIN: process.env.FIREBASE_AUTH_DOMATIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    COOKIE_SECRET_CURRENT: process.env.COOKIE_SECRET_CURRENT,
    COOKIE_SECRET_PREVIOUS: process.env.COOKIE_SECRET_PREVIOUS,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    CHAT_ENGINE_PROJECT_ID: process.env.CHAT_ENGINE_PROJECT_ID,
    CHAT_ENGINE_PRIVATE_KEY: process.env.CHAT_ENGINE_PRIVATE_KEY,
  },
});
