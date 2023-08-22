import dotenv from 'dotenv';
import express from 'express';
import appBodegas from './routers/bodegas.js';
/* import { appToken, appVerify } from './limit/token.js'; */

dotenv.config();
const app = express();
app.use(express.json());

/* app.use("/token", appToken); */


app.use("/bodegas" ,appBodegas)

const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

