import { Router } from "express"
import UserController from "../../controllers/UserController.js";

const userRoute = Router();

/**
 * @route GET /usuarios
 * @description Retorna uma lista de todos os usuários cadastrados.
 */
userRoute.get("/usuarios", UserController.getUsers)

/**
 * @route GET /usuarios/:id
 * @description Retorna um usuário a partir do ID fornecido.
 */
userRoute.get("/usuarios/:id", UserController.getUsersById)

/**
 * @route POST /usuarios
 * @description Cria um novo usuário no sistema.
 */
userRoute.post("/usuarios", UserController.postUsers)

/**
 * @route PUT /usuarios/:id
 * @description Atualiza as informações de um usuário existente com base no ID fornecido.
 */
userRoute.put("/usuarios/:id", UserController.putUsersById)

/**
 * @route DELETE /usuarios/:id
 * @description Remove um usuário do sistema com base no ID fornecido.
 */
userRoute.delete("/usuarios/:id", UserController.deleteUsersById)

export default userRoute