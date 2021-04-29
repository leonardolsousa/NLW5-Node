import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de parametros
 * 
 * Routes Params => Parametros de rotas
 * Ex: http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * Ex: http://localhost:3333/settings/1?search=algumacoisapraachar
 * 
 * Body Params = > {
 * 
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);


export { routes };