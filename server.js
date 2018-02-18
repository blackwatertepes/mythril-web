const Koa = require('koa');
const router = require('./router');
const PORT = process.env.PORT || 3000;

let app = new Koa();

app.listen(PORT, function() {
  console.log(`Koa is running on port ${PORT}`);
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(function *() {
    this.body = 'Hello world';
  });

module.exports = app;
