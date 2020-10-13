import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesControllers';

const routes = Router();

// MVC

// Model (representação de uma entidade, um dado)
// Views (como são visualizadas)
// Controllers (onde fica a lógica das rotas)

routes.post('/orphanages', OrphanagesController.create);

export default routes;