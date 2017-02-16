module.exports = {
  port: 3000,
  session: {
    secret: 'ctblog',
    key: 'ctblog',
    maxAge: 2592000000
  },
  token: {
  	secret: 'centling.tech-ctblog',
  	expiresIn: 30
  },
  mongodb: 'mongodb://localhost:27017/ctblog'
};