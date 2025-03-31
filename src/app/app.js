import express from 'express'
import { HOST, PORT } from './configs/env.js'
import router from './router/router.js'
import database from './configs/database.js'

const app = express()

app.use(router)

async function startServer() {
    try {
        await database()
        app.listen(PORT, HOST, () => {
            console.log(`\n -> Servidor iniciou em: http://${HOST}:${PORT}`)
        })
    } catch (error) {
        console.error(' -> Erro ao iniciar o servidor:', error)
    }
}

startServer()