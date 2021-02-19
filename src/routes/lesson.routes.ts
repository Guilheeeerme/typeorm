import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import Lesson from "../models/Lesson";

const lessonRouter = Router();

lessonRouter.post("/", async (request: Request, response: Response) => {
  try {
    const repository = getRepository(Lesson);
    const res = await repository.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log("err.message ==>", error.message);
    return response.status(400).send();
  }
});

lessonRouter.get("/", async (request: Request, response: Response) => {
  try {
    return response.status(200).json(await getRepository(Lesson).find());
  } catch (error) {
    console.log("err.message ==>", error.message);
  }
});

export default lessonRouter;
