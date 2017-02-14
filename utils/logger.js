var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')
var log4js = require('log4js');

var logDirectory = path.join(__dirname, '/../logs')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: logDirectory+'/log'}
  ]
});

// module.exports = morgan('combined', {stream: accessLogStream});
// logger.setLevel('ERROR');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');
global.Logger = log4js.getLogger();

module.exports = {
  access: morgan('combined', {stream: accessLogStream})
};