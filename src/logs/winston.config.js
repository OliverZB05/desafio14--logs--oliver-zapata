import winston from 'winston';
import {__dirname} from '../utils.js';
import path from 'path';

const levels = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    }
};

const developmentLogger = winston.createLogger({
    levels: levels.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug'
        })
    ]
});

const productionLogger = winston.createLogger({
    levels: levels.levels,
    transports: [
    new winston.transports.Console({
        level: 'info'
    }),
    new winston.transports.File({
        level: 'error',
        filename: path.join(__dirname, 'errors.log')
    })
    ]
});

export { developmentLogger, productionLogger };