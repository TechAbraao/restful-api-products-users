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

export default productRoute