import { HOST_DB, USER_DB, PASSWORD_DB, DB_NAME } from './env.js'
import mysql from 'mysql2/promise'; 

const database = await mysql.createConnection({
    host: HOST_DB,
    user: USER_DB,
    password: PASSWORD_DB,
    database: DB_NAME
})

export default database