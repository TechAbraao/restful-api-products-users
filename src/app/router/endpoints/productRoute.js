import { Router } from "express"
import ProductDAO from "../../utils/ProductDAO.js";

const productRoute = Router();

// Listar TODOS os PRODUTOS
productRoute.get("/produtos", async (req, res) => {
    try {
        const allProducts = await ProductDAO.allProducts();
        res.status(200).json(allProducts)
    } catch (e) {
        res.status(500).json({"mensagem": "Erro ao buscar todos os produtos."})
    }
})

// Listar PRODUTO a partir do ID
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

// Adiciona novo PRODUTO no Banco de Dados
productRoute.post("/produtos", async (req, res) => {
    try {
        console.log("Corpo da requisição recebido:", req.body);
        const { nome, preco, descricao, quantidade, categoria } = req.body;
        
        if (!nome || !preco || !descricao || !quantidade || !categoria) {
            return res.status(400).json({"mensagem": "Preencha todos os campos para enviar a requisição."})
        }

        await ProductDAO.addingProduct(nome, preco, descricao, quantidade, categoria)

        res.status(200).json({"mensagem": "Produto adicionado com sucesso."})

    } catch (e) {
        console.error(`Erro ao adicionar novo produto: ${e}`)
    }
})

// Atualizar dados de um PRODUTO existente
productRoute.put("/produtos/:id", async (req, res) => {
    try {
        const id = req.params.id
        const { nome, preco, descricao, quantidade, categoria } = req.body;

        await ProductDAO.updateProductById(id, nome, preco, descricao, quantidade, categoria)

        res.status(200).json({"mensagem": `Produto atualizado com sucesso.`})

    } catch (e) {
        console.error(`Erro ao atualizar produto: ${e}`)
    }
})

// Remove PRODUTO do Banco de Dados a partir do ID
productRoute.delete("/produtos/:id", (req, res) => {
    //
})



export default productRoute