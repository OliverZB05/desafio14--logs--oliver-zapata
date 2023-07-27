const LogTests = async (req, res) => {
    req.logger(req, 'debug', 'mensaje de debug');
    req.logger(req, 'http', 'mensaje de http');
    req.logger(req, 'info', 'mensaje de info');
    req.logger(req, 'warning', 'mensaje de warning');
    req.logger(req, 'error', 'mensaje de error');
    req.logger(req, 'fatal', 'mensaje de fatal');
    res.send('Prueba de logs completada');
}

export { LogTests };