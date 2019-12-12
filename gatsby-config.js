const config = require("./config/config")
const plugins = require("./config/plugins")

//ALL PLUGINS ARE LOCATED IN THE CONFIG FOLDER IN ROOT OF DIRECTORY
//Please edit that file not this one

module.exports = {
  siteMetadata: {
    title: `Chance Peragine`,
    description: `Resume`,
    author: `Chance Peragine`,
  },
  plugins,
}
