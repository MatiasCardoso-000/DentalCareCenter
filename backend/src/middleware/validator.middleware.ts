import {Request,Response, NextFunction } from "express";

export const validateSchema = (schema:any) => (req:Request, res:Response, next:NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error:any) {
    console.log(error.errors.map((error :any) => error.message));
    
     res.status(400).json({ error: error.errors.map((error :any) => error.message) });
  }
};
