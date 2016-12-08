// twitter configuration
require('dotenv').config({ silent: true });

module.exports = {
  consumerKey: process.ENV.CONSUMER_KEY,
  consumerSecret: process.ENV.CONSUMER_SECRET,
  accessToken: process.ENV.ACCESS_TOKEN,
  accessTokenSecret: process.ENV.ACCESS_TOKEN_SECRET,
};
