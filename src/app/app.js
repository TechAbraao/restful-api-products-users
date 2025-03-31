import express from 'express'
import { HOST, PORT } from './configs/env.js'
import router from './router/router.js'

const app = express()

app.use(router)

app.listen(PORT, HOST, () => {
    console.log(`\nServidor iniciou em: http://${HOST}:${PORT}`)
})