import { Router } from "express"

const userRoute = Router();

userRoute.get("/usuarios", (req, res) => {
    res.status(200).send({"mensagem": "Sucesso!"})
})

export default userRoute