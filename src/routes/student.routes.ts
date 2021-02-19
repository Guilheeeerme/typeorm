import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import Student from "../models/Student";

const studentRouter = Router();

studentRouter.post("/", async (request: Request, response: Response) => {
  try {
    const repository = getRepository(Student);
    const res = await repository.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log("err.message ==>", error.message);
    return response.status(400).send();
  }
});

studentRouter.get("/", async (request: Request, response: Response) => {
  try {
    return response.status(200).json(await getRepository(Student).find());
  } catch (error) {
    console.log("err.message ==>", error.message);
  }
});

export default studentRouter;
