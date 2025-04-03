import UserDAO from "../utils/UserDAO.js"

class UserController {
    static async getUsers(req, res) {
        try {
            const allUsers = await UserDAO.allUsers();

            if (!allUsers || allUsers.length === 0) {
                return res.status(404).json({"mensagem": "Nenhum usuário encontrado."})
            }

            res.status(200).json(allUsers)

        } catch (e) {
            console.error(`Erro ao listar TODOS os usuários: ${e}`);
            return res.status(500).json({"mensagem": "Erro ao buscar TODOS os usuários."})
        }
    }
    static async getUsersById(req, res) {
        try {
            const id = req.params.id

            if (!id) {
                return res.status(400).json({"mensagem": "Preencha o ID."})
            }

            const findUserById = await UserDAO.userById(id)
        
            res.status(200).json(findUserById)
        } catch (e) {
            console.error(`Erro ao mostrar usuário pelo ID: ${e}`)
            throw e;
        }
    }
    static async postUsers(req, res) {
        try {
            const { nome, email, senha } = req.body
            if (!nome || !email || !senha) {
                return res.status(400).json({"mensagem": "Preencha todos os campos."})
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ "mensagem": "Informe um e-mail válido." });
            }

            if (senha.length <= 5) {
                return res.status(400).json({"mensagem": "A senha deve ser maior ou igual 6 caracteres."})
            }

            await UserDAO.addingUser(nome, email, senha)

            res.status(201).json({"mensagem": "Usuário cadastrado com sucesso."})
        } catch (e) {
            console.error(`Erro ao INSERIR novo usuário: ${e}`);
            return res.status(500).json({"mensagem": "Erro ao cadastrar um novo usuário."})
        }
    }
    static async putUsersById(req, res) {
        try {
            const id = req.params.id;
            const { nome, email, senha } = req.body;
        
            if (!nome || !email || !senha ) {
                return res.status(400).json({"mensagem": "Preencha todos os campos."})
            }
            await UserDAO.updateUserById(id, nome, email, senha);
        
            res.status(200).json({"mensagem": "Usuário atualizado com sucesso."})
        } catch (e) {
            console.error(`Erro ao atualizar usuário: ${e}`)
            throw e;
        }
    }
    static async deleteUsersById(req, res) {
        try {
            const id = req.params.id
            if (!id) {
                return res.status(400).json({"mensagem": "Preencha todos os campos."})
            };
    
            await UserDAO.deleteUserById(id);
            res.status(200).json({"mensagem": `Usuário de ID = ${id} excluído com sucesso.`})
        } catch (e) {
            console.error(`Erro ao excluir usuário: ${e}`)
        }
    }
}

export default UserController


