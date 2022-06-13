import { apply } from "async";
import { Router, json } from "express";
const routes = Router();

routes.get('/', (req,res) => {
    const users = JSON.parse(fs.readFileSync('./static/data.json', 'utf-8'))
})

export default routes;