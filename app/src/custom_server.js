const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dev = process.env.NODE_ENV !== 'production'
const app = next(dev);
const handle = app.getRequestHandler()
app.prepare().then(() => {
    const server = express();
/*
    server.use(createProxyMiddleware("/tasks", { target: "http://localhost:3000/",
    pathRewrite: {'http://localhost:3000/tasks':"/tasks"}
    }));
*/
    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen("3002", err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:3002`)
    });
});
