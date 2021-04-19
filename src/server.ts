import express from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
    return response.send("Olá Next Level Week 05")
})

app.listen(3333, () => console.log("Server is running on port 3333"));