import express from "express";
import { addUser, dataAlatBerat, login } from "../controller/controller.js";

const route = express.Router();

route.get('/view', dataAlatBerat);
route.post('/register', addUser);
route.post('/login', login);

export default route;