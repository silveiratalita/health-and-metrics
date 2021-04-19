/** Dependencies */
const express = require('express');

const queryController =
require('./controller/QueryController');




const router = express.Router();

const serverVars = {request_numbers:0};
let requestNumbers = function (req, res, next) {
  serverVars.request_numbers ++;
  next();
};
router.use(requestNumbers);
const query = queryController(serverVars);
router.get('/health', query.health.bind(query));
router.get('/metrics', query.metrics.bind(query));


module.exports = {router};
