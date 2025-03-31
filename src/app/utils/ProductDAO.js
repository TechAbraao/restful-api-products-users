import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import database from "../configs/database.js"; 
import { DB_NAME } from "../configs/env.js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);   

class ProductDAO {
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

    static async allProducts() {
        try {
            const [r] = await database.query(`SELECT * FROM PRODUTO`);
            return r;
        } catch (e) {
            console.error(`Erro ao buscar todos os produtos: ${e}`);
            throw e;
        }
    }
}

export default ProductDAO;
