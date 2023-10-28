import { Router } from "express";
import {
  insertStudent,
  getStudents,
  getStudent,
  updateStudent,
} from "./controller/students";
import {
  insertScore,
  getScores,
  getScore,
  updateScore,
} from "./controller/score";

const routes = Router();

// students
routes.post("/student", insertStudent);
routes.get("/student", getStudents);
routes.get("/student/:id", getStudent);
routes.put("/student/:id", updateStudent);
// score
routes.post("/score", insertScore);
routes.get("/score", getScores);
routes.get("/score/:id", getScore);
routes.put("/score/:id", updateScore);

export default routes;
