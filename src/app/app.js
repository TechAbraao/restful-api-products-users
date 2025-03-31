import express from 'express'

const app = express()

const PORT = 3000
app.listen(PORT, () => {
    console.log(`\nServidor iniciou em: https://127.0.0.1:${PORT}`)
})