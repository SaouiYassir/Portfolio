import express from 'express'
import { addProject } from "../controllers/project.controllers.js";

const projectRouter = express.Router();

projectRouter.post("/project", addProject);

export default projectRouter;