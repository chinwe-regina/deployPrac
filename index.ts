import express, {Application} from "express";
import cors from "cors"
import { mainApp } from "./mainApp";

const port: number |string =process.env.PORT;
const app: Application= express();

app.use(cors());
app.use(express.json());

mainApp(app);
server.listen(port, () {
  
})
