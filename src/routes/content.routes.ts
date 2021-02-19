import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import Content from "../models/Content";

const contentRouter = Router();

contentRouter.post("/", async (request: Request, response: Response) => {
  try {
    const repository = getRepository(Content);
    const res = await repository.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log("err.message ==>", error.message);
  }
});

contentRouter.get("/", async (request: Request, response: Response) => {
  try {
    return response.status(200).json(await getRepository(Content).find());
  } catch (error) {
    console.log("err.message ==>", error.message);
    return response.status(400).send();
  }
});

export default contentRouter;
