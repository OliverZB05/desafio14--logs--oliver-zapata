import mongoose from "mongoose";
import config from '../../config/config.js';
import { developmentLogger, productionLogger } from '../../logs/winston.config.js';

const URI = config.mongoUrl;

try{
    await mongoose.connect(URI);
    /* console.log('***Conectado a BDD***'); */

    if (process.env.NODE_ENV === 'development') {
        developmentLogger.log('info', '***Conectado a BDD***');
    } else {
        productionLogger.log('info', '***Conectado a BDD***');
    }
} catch {
    /* console.log(error); */

    if (process.env.NODE_ENV === 'development') {
        developmentLogger.log('error', error);
    } else {
        productionLogger.log('error', error);
    }
}