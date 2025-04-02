import database from './config/database.js'
import ProductDAO from './utils/ProductDAO.js'
import UserDAO from './utils/UserDAO.js'
import { HOST, PORT } from './config/env.js'
import app from './config/app.js'

async function startServer() {
    try {
        await database
        await ProductDAO.createProductTables()
        await ProductDAO.createMigrationsTable();
        await ProductDAO.insertingProductData()

        await UserDAO.createUserTable()

        app.listen(PORT, HOST, () => {
            console.log(` -> Servidor iniciou em: http://${HOST}:${PORT}/<end-point>`)
        })
    } catch (error) {
        console.error(' -> Erro ao iniciar o servidor:', error)
    }
}

startServer()