const koa = require('koa');
const util = require('util');
let app = new koa();
let exec = util.promisify(require('child_process').exec);

let cmd = async function(_cmd) {
  const { stdout, stderr } = await exec(_cmd);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

let myth = async function(_filename) {
  cmd(`myth -x ${_filename}`);
}

app.use(function *() {
  this.body = 'Hello world';
});

var server = app.listen(3000, function() {
  console.log('Koa is listening to http://localhost:3000');

  myth('~/Sites/github.com/mythril/solidity_examples/origin.sol');
});
