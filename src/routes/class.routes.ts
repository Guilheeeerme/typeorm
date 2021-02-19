import { Router, Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Class } from "../models/Class";
import ClassRepository from "../repositories/ClassRepository";

const classRouter = Router();

classRouter.post("/", async (request: Request, response: Response) => {
  try {
    const repository = getRepository(Class);
    const res = await repository.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log("err.message ==>", error.message);
  }
});

classRouter.get("/", async (request: Request, response: Response) => {
  try {
    // const repositorie = await getRepository(Class).find();
    // const res = await repositorie.find();
    return response.status(200).json(await getRepository(Class).find());
  } catch (error) {
    console.log("err.message ==>", error.message);
  }
});

classRouter.get("/:name", async (request: Request, response: Response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  return response.status(200).json(res);
});

export default classRouter;
