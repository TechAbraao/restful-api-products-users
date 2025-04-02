import { Router } from "express"
import UserDAO from "../../utils/UserDAO.js";

const userRoute = Router();

// Listar TODOS os USUÁRIOS
userRoute.get("/usuarios", async (req, res) => {

    const allUsers = await UserDAO.allUsers();

    res.status(200).json(allUsers)
})
// Listar USUÁRIO por ID
userRoute.get("/usuarios/:id", async (req, res) => {
    const id = req.params.id

    if (!id) {
        return res.status(400).json({"mensagem": "Preencha o ID."})
    }

    const findUserById = await UserDAO.userById(id)

    res.status(200).json(findUserById)

})
// ADICIONAR USUÁRIO ao Banco de Dados
userRoute.post("/usuarios", async (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        return res.status(400).json({"mensagem": "Preencha todos os campos."})
    }
    await UserDAO.addingUser(nome, email, senha)
    res.status(200).json({"mensagem": "Usuário adicionado com sucesso."})

})
// ALTERANDO dados de USUÁRIOS
userRoute.put("/usuarios/:id", async (req, res) => {
    const id = req.params.id;
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha ) {
        return res.status(400).json({"mensagem": "Preencha todos os campos."})
    }
    await UserDAO.updateUserById(id, nome, email, senha);

    res.status(200).json({"mensagem": "Usuário atualizado com sucesso."})
})
// DELETANDO um USUÁRIO pelo ID
userRoute.delete("/usuarios/:id", async (req, res) => {
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
})


export default userRoute