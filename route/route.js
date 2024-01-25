import express from "express";
import { addUser, dataAlatBerat, detProduk, login, userId } from "../controller/controller.js";

const route = express.Router();

route.get('/view', dataAlatBerat);
route.get('/user/:id', userId)
route.get('/detail/:id', detProduk);
route.post('/register', addUser);
route.post('/login', login);


export default route;