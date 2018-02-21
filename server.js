const Koa = require('koa');
const db = require('./app/db');
const router = require('./app/router');

let app = new Koa();

app.listen(process.env.PORT, function() {
  console.log(`Koa is running on port ${process.env.PORT}`);
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(function *() {
    this.body = "Hello World";
  });

module.exports = app;
