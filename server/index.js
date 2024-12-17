const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db_todos.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Enable CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
