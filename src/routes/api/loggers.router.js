import { Router } from 'express';
import { LogTests } from "../../service/logs.service.js";

const router = Router();

//======== { Método de logs } ========
router.get('/loggerTest', LogTests);
//======== { Método de logs } ========

export default router;