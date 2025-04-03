import ProductDAO from "../utils/ProductDAO.js";

class ProductController {
    static async getProducts(req, res) {
        try {
            const allProducts = await ProductDAO.allProducts();

            if (!allProducts || allProducts.length === 0) {
                return res.status(404).json({"mensagem": "Nenhum produto encontrado."})
            }

            res.status(200).json(allProducts)

        } catch (e) {
            console.error(`Erro ao buscar TODOS os produtos: ${e}`);
            return res.status(500).json({"mensagem": "Erro ao buscar TODOS os produtos."})
        }
    }
    static async getProductsById(req, res) {
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
    }
    static async postProducts(req, res) {
        try {
            console.log("Corpo da requisição recebido:", req.body);
            const { nome, preco, descricao, quantidade, categoria } = req.body;
            
            if (!nome || !preco || !descricao || !quantidade || !categoria) {
                return res.status(400).json({"mensagem": "Preencha todos os campos para enviar a requisição."})
            }
            
            if (nome.length < 3) {
                return res.status(400).json({"mensagem": "O nome do produto deve ter no mínimo 3 caracteres."})
            }

            if (preco <= 0) {
                return res.status(400).json({"mensagem": "O preço deve ser um valor positivo maior que zero."})
            }

            if (quantidade < 0) {
                return res.status(400).json({"mensagem": "O estoque deve ter um valor maior ou igual a zero."})
            }

            await ProductDAO.addingProduct(nome, preco, descricao, quantidade, categoria)
    
            res.status(201).json({"mensagem": "Produto adicionado com sucesso."})
    
        } catch (e) {
            console.error(`Erro ao adicionar novo produto: ${e}`)
            throw e;
        }
    }
    static async putProductsById(req, res) {
        try {
            const id = req.params.id
            const { nome, preco, descricao, quantidade, categoria } = req.body;

            await ProductDAO.updateProductById(id, nome, preco, descricao, quantidade, categoria)

            res.status(200).json({"mensagem": `Produto atualizado com sucesso.`})

        } catch (e) {
            console.error(`Erro ao atualizar produto: ${e}`)
        }
    }
    static async deleteProductsById(req, res) {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({"mensagem": "Erro ao excluir produto. Especifique o ID."})
            }

            await ProductDAO.deleteProductById(id)
            res.status(200).json({"mensagem": `Produto de id = ${id} excluído com sucesso.`})

        } catch (e) {
            console.error(`Erro ao deletar produto: ${e}`)
            throw e;
        }
    }
}

export default ProductController