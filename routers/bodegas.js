import { Router } from "express";
import con from '../db/atlas.js'
import { ObjectId } from "bson";
import { configGET } from "../limit/limit.js";
// import { middlewareVerify, proxySucursalAuto } from "../middleware/proxySucursalAuto.js";


const appBodegas = Router();

// 4. Realizar un EndPolnt que permita listar todas las bodegas ordenadas alfabeticamente
appBodegas.get("/get/alphabetic", configGET(),async(req, res) => {
    if (!req.rateLimit) return; 
    console.log(req.rateLimit);
    
    let {id} = req.query ;
    let db =await con();
    let bodegas = db.collection("bodegas");      
    let result = await bodegas.find({}).sort({ nombre: 1 }).toArray(); 
    res.send(result);
    
});

// 5. Realizar un EndPolnt que permita crear una bodegas.(agregar en los comentarios de la función los datos de entrada).
appBodegas.post("/post", configGET(),async(req, res) => {
    if (!req.rateLimit) return; 

    console.log(req.rateLimit);
    
    let {id} = req.query ;
    let db =await con();
    let bodegas = db.collection("bodegas");     
    try {
        const date={
            ...req.body,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at),
            deleted_at: new Date(req.body.deleted_at)
        }
        
        let result = await bodegas.insertOne(date); 
        res.send({ message: "bodegas ingresado correctamente", result });
    
    } catch (error) {
        console.log(error);
        res.send({ message: "No fue posible ingresar las bodegas" });
        console.log(error.errInfo.details.schemaRulesNotSatisfied.specifiedAs);
    }
    
});
/* {
    "_id": 106,
    "nombre": "Bodega Sexta",
    "id_responsable": 506,
    "estado": 2,
    "created_by": 406,
    "update_by": 406,
    "created_at": "2023-06-30",
    "updated_at": "2023-08-22",
    "deleted_at": "2023-08-30"
  } */













export default appBodegas