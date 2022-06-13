import express from "express";
import frontend from './frontend/index.js';
import backend from './backend/index.js';

const port = 2508;
const app = express();

app.set('view engine','ejs');
app.set("views","./frontend")



app.use("/", frontend);
app.use("/api/v1", backend);

app.listen(port, ()=> {
    console.log('server challange ch5 ${port}');
});