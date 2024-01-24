import express from "express";
import { addUser, dataAlatBerat, detProduk, login } from "../controller/controller.js";

const route = express.Router();

route.get('/view', dataAlatBerat);
route.post('/register', addUser);
route.post('/login', login);
route.get('/detail/:id', detProduk);

export default route;