import { Router } from "express";

import classRouter from "./class.routes";
import lessonRouter from "./lesson.routes";
import contentRouter from "./content.routes";
import studentRouter from "./student.routes";

const routes = Router();

routes.use("/class", classRouter);
routes.use("/lesson", lessonRouter);
routes.use("/content", contentRouter);
routes.use("/student", studentRouter);

export default routes;
