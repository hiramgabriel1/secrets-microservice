import { Router } from "express";
import { createSecret, getSecret, searchSecret, deleteSecret } from "../controllers/secrets.js";
import cacheInit from "../middlewares/cache.js";

const routerSecret = Router()
const pathRouter = "/api/v1"

routerSecret.get(`${pathRouter}/`, cacheInit, getSecret)
routerSecret.get(`${pathRouter}/search-secret/:title`, cacheInit, searchSecret)
routerSecret.delete(`${pathRouter}/delete/:title`, deleteSecret)
routerSecret.post(`${pathRouter}/create-secret`, createSecret)

export default routerSecret