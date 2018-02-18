const Router = require('koa-router');
const util = require('util');

let router = new Router();
let exec = util.promisify(require('child_process').exec);

let cmd = (_cmd) => {
  return exec(_cmd);
}

let myth = (_net, _addr) => {
  return cmd(`myth ${_net} -x -a ${_addr}`);
}

let output = (result) => {
  let response = {body: result.stdout};
  if (result.stderr.length > 0) {
    response.error = result.stderr
  }
  return JSON.stringify(response);
}

router.get('/infura/:net/:addr', async (ctx) => {
  let result = await myth(`--infura-${ctx.params.net}`, ctx.params.addr);
  ctx.body = output(result);
});

router.get('/rpc/:host/:port/:addr', async (ctx) => {
  let result = await myth(`--rpc ${ctx.params.host}:${ctx.params.port}`, ctx.params.addr);
  ctx.body = output(result);
});

module.exports = router;
