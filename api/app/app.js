import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = '<h1>Koa-react-first</h1>';
})

export default app;