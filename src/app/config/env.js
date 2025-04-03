import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || '3000'
const HOST = process.env.HOST || 'localhost'
const HOST_DB = process.env.HOST_DB
const USER_DB = process.env.USER_DB
const PASSWORD_DB = process.env.PASSWORD_DB
const DB_NAME = process.env.DB_NAME

export { PORT, HOST, HOST_DB, USER_DB, PASSWORD_DB, DB_NAME }