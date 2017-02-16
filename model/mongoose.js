var dbconfig = require('../config/config').mongodb;
var mongoose = require('mongoose');
mongoose.connect(dbconfig);
mongoose.Promise = global.Promise;

db = mongoose.connection;

db.on('error', ()=>{
	Logger.error('mongodb connection error');
})

db.on('open', ()=>{
	Logger.info('db open');
});
db.on('connecting', ()=>{
	Logger.info('db connecting...');
});
db.on('connected', ()=>{
	Logger.info('db connected');
});
db.on('disconnecting', ()=>{
	Logger.info('db disconnecting...');
});
db.on('disconnected', ()=>{
	Logger.info('db disconnected');
});
db.on('close', ()=>{
	Logger.info('db close');
});

module.exports = mongoose;
