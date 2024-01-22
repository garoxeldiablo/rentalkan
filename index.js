import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import route from "./route/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(route);
app.use(express.static(path.join(__dirname, './web')));


app.use(express.json());
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
}); 