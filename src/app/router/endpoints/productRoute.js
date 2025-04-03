import { Router } from "express"
import ProductController from "../../controllers/ProductController.js";

const productRoute = Router();

/**
 * @route GET /produtos
 * @description Retorna uma lista de todos os produtos cadastrados.
 */
productRoute.get("/produtos", ProductController.getProducts)

/**
 * @route GET /produtos/:id
 * @description Retorna um produto a partir do ID fornecido.
 */
productRoute.get("/produtos/:id", ProductController.getProductsById)

/**git 
 * @route POST /produtos
 * @description Cria um novo produto no sistema.
 */
productRoute.post("/produtos", ProductController.postProducts)

/**
 * @route PUT /produtos/:id
 * @description Atualiza as informações de um produto existente com base no ID fornecido.
 */
productRoute.put("/produtos/:id", ProductController.putProductsById)

/**
 * @route DELETE /produtos/:id
 * @description Remove um produto do sistema com base no ID fornecido.
 */
productRoute.delete("/produtos/:id", ProductController.deleteProductsById)

export default productRoute