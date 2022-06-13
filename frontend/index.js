import express, { Router } from "express";
import fs from "fs";

const routes = Router();

routes.use(express.urlencoded({extended: true}));

routes.use('/assets', express.static("./frontend/assets"));


routes.get("/", (req, res) => {
    res.render("home")
});

routes.get("/login", (req, res) => {
    res.render("login")
});

routes.get("/playnow", (req, res) => {
    res.render("playnow")
});


export default routes;





