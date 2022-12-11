const express = require('express');

const app = express();

const courses = [
    {id:1, name:'Engilsh'},
    {id:2, name:'Hindi'},
];

// app.get("/api/health",(req, res) =>{
//     res.send(`Hello from our express server:`);
// })

app.get('/api/health', async (_req, res, _next) => {

    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});

app.get('/api/courses',async (_req, res, _next) =>{
    res.send(courses)
})

app.get('/api/courses/:name',async (_req, res, _next) =>{
    const name = _req.params.name;
    res.send(name);
})


const port = process.env.PORT || "3000";
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});