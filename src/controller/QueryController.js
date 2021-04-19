var os = require("os");

class QueryController {
  
  constructor(serverVars) {
    this.serverVars = serverVars;
  }

  async health(req, res, next) {
    try {
      res.send().status(200);
    } catch (e) {
      e.status = e.status || 500;
      return next(e);
    }
  }

  async metrics(req, res, next) {
    try {
      const hostname = os.hostname();
      const uptime = os.uptime();     
      res.send({hostname:hostname, uptime:uptime, counter:this.serverVars.request_numbers}).status(200);
    } catch (e) {
      e.status = e.status || 500;
      return next(e);
    }
  }
}

module.exports = (request_numbers) =>
  new QueryController(request_numbers);
