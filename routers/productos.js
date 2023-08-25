import { Router } from "express";
import con from '../db/atlas.js'
import { ObjectId } from "bson";
import { configGET } from "../limit/limit.js";
import { middlewareVerify, proxyProductos } from "../middleware/proxyProductos.js";
// import { middlewareVerify, proxySucursalAuto } from "../middleware/proxySucursalAuto.js";


const appProductos = Router();

// 6. Realizar un EndPoint que permita listar todos los productos en orden
// descendente por el campo "Total".
// • El campo "Total" es la cantidad de unidades que la empresa tiene
// de este producto, considerando la unión de todas las bodegas, es
// decir que el dato como tal no existe en la base de datos,sino se debe
// calcular. Si la Bodega A tiene 1O unidades, la Bodega B tiene 5
// unidades y la Bodega C tiene 3 unidades. Total= 18.
appProductos.get("/orden/total", configGET(),async(req, res) => {
    if (!req.rateLimit) return; 
    console.log(req.rateLimit);
    
    let {id} = req.query ;
    let db =await con();
    let productos = db.collection("productos");      
    let result = await productos.aggregate([
        {
          $lookup: {
            from: "inventarios",
            localField: "_id",
            foreignField: "id_producto",
            as: "inventarios"
          }
        },
        {
          $addFields: {
            Total: {
              $sum: "$inventarios.cantidad"
            }
          }
        },
        
        {
          $group: {
            _id: "$_id",
            nombre: { $first: "$nombre" },
            descripcion: { $first: "$descripcion" },
            estado: { $first: "$estado" },
            created_by: { $first: "$created_by" },
            update_by: { $first: "$update_by" },
            created_at: { $first: "$created_at" },
            updated_at: { $first: "$updated_at" },
            deleted_at: { $first: "$deleted_at" },
            Total: { $first: "$Total" }
          }
        },
        {
          $sort: {
            Total: -1
          }
        }
      ]).toArray();
    res.send(result);
    
});

// Realizar un EndPoint que permita insertar un productos y a su vez asigne
// una cantidad inicial del mismo en la tabla inventarios en una de las bodegas
// por default.
appProductos.post("/insert/invetarios/bodeg", configGET(),proxyProductos,middlewareVerify,async(req, res) => {
    if (!req.rateLimit) return; 
    console.log(req.rateLimit);
    
    let {id} = req.query ;
    let db =await con();
    let productos = db.collection("productos"); 
    let inventarios = db.collection("inventarios");  
    try {
      
      const data1 = {
        _id: req.body._id,
      };
      
      const updateData1 = {
        $setOnInsert: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          estado: req.body.estado,
          created_by: req.body.created_by,
          updated_by: req.body.update_by,
          created_at: new Date(req.body.created_at),
          updated_at: new Date(req.body.updated_at),
          deleted_at: req.body.deleted_at ? new Date(req.body.deleted_at) : null,
        },
      };
      
      
      const data2 = {
        _id: req.body._id,
        id_bodega: req.body.id_bodega,
        id_producto: req.body.id_producto,
      };
      
      const updateData2 = {
        $setOnInsert: {
          cantidad: req.body.cantidad,
          created_by: req.body.created_by,
          update_by: req.body.update_by,
          created_at: new Date(req.body.created_at),
          updated_at: new Date(req.body.updated_at),
          deleted_at: req.body.deleted_at ? new Date(req.body.deleted_at) : null,
        },
      };
      


      let result1 = await productos.updateOne(data1, updateData1);
      let result2 = await inventarios.updateOne(data2, updateData2);

      res.status(200).send({ result1, result2 });



    } catch (error) {
      console.log(error);
      res.send("hola mundo")
    }
    
    
         
    
    
});












export default appProductos