const {router} = require('./router');
const express=require('express');


const server = express();
server.use(router);

server.listen(3333, (err) => {
  if (err) {
    return process.exit(1);
  }
  console.log(`listening on port  3333`);
});


