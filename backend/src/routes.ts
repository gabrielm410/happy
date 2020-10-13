import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesControllers';


const routes = Router();
const upload = multer(uploadConfig);

// MVC

// Model (representação de uma entidade, um dado)
// Views (como são visualizadas)
// Controllers (onde fica a lógica das rotas)

// index, show, create, update, delete - controller

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

export default routes;