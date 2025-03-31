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
            const sqlFilePathProductData = path.join(__dirname, "../../scripts/migrations/inserting_product_data.sql");
            const sqlProductData = fs.readFileSync(sqlFilePathProductData, "utf8");

            const [insertingData] = await database.query(`${sqlProductData}`)

            return insertingData

        } catch (e) {
            console.error(`Erro ao inserir base de dados fictícia: ${e}`)
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
            const [r] = await database.query(`SELECT * FROM PRODUTO`);
            return r;
        } catch (e) {
            console.error(`Erro ao buscar todos os produtos: ${e}`);
            throw e;
        }
    }
    // Insere novos dados na tabela PRODUTO
    static async createProduct() {
        try {
            //
        } catch (e) {
            console.error(`Erro ao adicionar novo produto: ${e}`)
            throw e;
        }
    }
}

export default ProductDAO;
