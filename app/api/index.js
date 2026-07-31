const path = require('path');
process.env.NODE_ENV = 'production';
process.chdir(path.join(__dirname, '..'));

module.exports = (req, res) => {
  require('../server.js');
};
