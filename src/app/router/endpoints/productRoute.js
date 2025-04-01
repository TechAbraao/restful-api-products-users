import { Router } from "express"
import ProductDAO from "../../utils/ProductDAO.js";

const productRoute = Router();

productRoute.get("/produtos", async (req, res) => {
    try {
        const allProducts = await ProductDAO.allProducts();
        res.status(200).json(allProducts)
    } catch (e) {
        res.status(500).json({"mensagem": "Erro ao buscar todos os produtos."})
    }
})

productRoute.get("/produtos/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const productById = await ProductDAO.productById(id)

        if (!productById) {
            return res.status(404).json({"mensagem": "Produto não encontrado."})
        }

        res.status(200).json(productById)
    } catch (e) {
        res.status(500).json({"mensagem": "Erro ao buscar produto através do id."})
    }
})

export default productRoute