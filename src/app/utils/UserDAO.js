import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import database from "../config/database.js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);   

class UserDAO {
    // Cria tabela USUARIO
    static async createUserTable() {
        try {
            const sqlFilePathUser= path.join(__dirname, "../../scripts/migrations/create_user_table.sql");
            const sqlUser = fs.readFileSync(sqlFilePathUser, "utf8");

            const [creatingTableUser] = await database.query(`${sqlUser}`)
            
            return creatingTableUser
        } catch (e) {
            console.error(`Erro ao criar tabela USUARIO: ${e}`)
        }
    }
    // TODOS os USUÁRIOS
    static async allUsers() {
        try {
            const query = `SELECT * FROM USUARIO`;
            const [allUsersTables] = await database.query(query)

            return allUsersTables
        } catch (e) {
            console.error(`Erro ao listar todos os usuários: ${e}`)
        }
    }
    // Listar USUÁRIO por ID
    static async userById(id) {
        try {
            const query = `SELECT * FROM USUARIO WHERE ID = ?`;
            const [findingUserById] = await database.query(query, [id])

            return findingUserById

        } catch (e) {
            console.error(`Erro ao listar usuário pelo ID.`)
        }
    }
    // Adicionando novo USUÁRIO
    static async addingUser(name, email, password){
        try {
            const query = `INSERT INTO USUARIO (NOME, EMAIL, SENHA) values (?, ?, ?)`
            const insertingUser = await database.query(query, [name, email, password])

            return insertingUser
        } catch (e) {
            console.error(`Novo usuário não foi adicionado devido ao erro: ${e}`);
            throw e;
        }
    }
    // Alterando dados do USUÁRIO
    static async updateUserById(id, name, email, password) {
        try {
            const query = `
            UPDATE USUARIO 
            SET NOME = ?, EMAIL = ?, SENHA = ?
            WHERE ID = ?
            `
            const updateUser = await database.query(query, [name, email, password, id]);
            return updateUser;
        } catch (e) {
            console.error(`Erro ao modificar usuário: ${e}`);
            throw e;
        }
    }
    // Deletando o USUÁRIO
    static async deleteUserById(id) {
        try {
            const query = `DELETE FROM USUARIO WHERE ID = ?`;
            const deletingUser = await database.query(query, [id]);

            return deletingUser;
        } catch (e) {
            console.error(`Erro ao excluir usuário: ${e}`);
            throw e;
        }
    }
}

export default UserDAO