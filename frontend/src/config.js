const dotenv = require("dotenv");

var config;

config = {
  api: {
    protocol: "http",
    host: "localhost",
    port: 5000,
  },
};

config.endpoint =
  config.api.protocol + "://" + config.api.host + ":" + config.api.port;

config.endpoint = config.api.protocol + "://" + config.api.host;

module.exports = config;
