process.env.NODE_ENV = 'development'

process.env.MONGODB_URL = 'mongodb://127.0.0.1/'
process.env.MONGODB_DATABASE = 'test'

process.env.WEB_HOST = '192.168.1.18'
process.env.WEB_PORT = '3000'

process.env.JWT_SUPERSECRET = 'ThisMySe+ce+,='
// Token Expires in 24 hours
process.env.JWT_EXPIRESIN = 60 * 24

import index from './../server/index'
