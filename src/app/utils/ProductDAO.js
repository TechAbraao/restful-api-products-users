import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import database from "../configs/database.js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);   

class ProductDAO {
    // Insere uma base de dados fictícia de produtos
    static async insertingProductData() {
        try {
            const alreadyInserted = await this.hasInsertedProductData();
            if (alreadyInserted) {
                console.log("\n -> Dados já foram inseridos anteriormente.");
                return;
            }
            const sqlFilePathProductData = path.join(__dirname, "../../scripts/migrations/inserting_product_data.sql");
            const sqlProductData = fs.readFileSync(sqlFilePathProductData, "utf8");
            await database.query(sqlProductData);
            console.log(" -> Dados inseridos com sucesso.");

            await database.query(`INSERT INTO MIGRATIONS (name) VALUES ('insertingProductData')`);
        } catch (e) {
            console.error(` -> Erro ao inserir base de dados fictícia: ${e}`);
            throw e;
        }
    }
    // Cria a tabela PRODUTO
    static async createProductTables() {
        try {
            const sqlFilePathProduct = path.join(__dirname, "../../scripts/migrations/create_product_table.sql");
            const sqlProduct = fs.readFileSync(sqlFilePathProduct, "utf8");

            const [creatingProduct] = await database.query(`${sqlProduct}`);

            return creatingProduct
            
        } catch (e) {
            console.error(`Erro ao criar tabelas de Produto no MySQL: ${e}`);
            throw e;
        }
    }
    // Mostra todos os produtos na tabela PRODUTO
    static async allProducts() {
        try {
            const query = `SELECT * FROM PRODUTO`
            const [r] = await database.query(query);
            return r;
        } catch (e) {
            console.error(`Erro ao buscar todos os produtos: ${e}`);
            throw e;
        }
    }
    // Consulta produto através do ID
    static async productById(id) {
        try {
            const query = `SELECT * FROM PRODUTO WHERE ID = ?`
            const [findProduct] = await database.query(query, [id])

            if (!findProduct || findProduct.length === 0) {
                return null
            }

            return findProduct[0]
        } catch (e) {
            console.error(` -> Erro ao realizar consulta por ID: ${e}`)
            throw e;
        }
    }
    // Tabela Migrations
    static async createMigrationsTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS MIGRATIONS (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) UNIQUE NOT NULL,
                applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await database.query(query);
    }
    // Verificar se os dados já foram inseridos
    static async hasInsertedProductData() {
        const query = `SELECT COUNT(*) AS count FROM MIGRATIONS WHERE name = 'insertingProductData'`;
        const [rows] = await database.query(query);
        return rows[0].count > 0; 
    }
}

export default ProductDAO;
