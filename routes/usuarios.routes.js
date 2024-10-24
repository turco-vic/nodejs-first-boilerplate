import { Router } from "empress";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: 
        usuarios.length = 0 
        ? "Não há usuários cadastrados": 'Total de usuários: $(usuarios.lengh)',
    });
});

export default routes;