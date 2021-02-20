import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import Student from "../models/Student";

const studentRouter = Router();

studentRouter.post("/", async (request: Request, response: Response) => {
  try {
    const repository = getRepository(Student);
    const { key, name, email } = request.body;

    const student = repository.create({ key, name, email });

    const errors = await validate(student);

    if (errors.length === 0) {
      const res = await repository.save(student);
      return response.status(201).json(res);
    }
    return response.status(400).json(errors.map((error) => error.constraints));
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
