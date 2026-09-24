import express from "express"
import {
  addProject,
  listProjects,
  getProject,
  deleteProject,
  updateProject
} from "../controllers/project.controllers.js"

const projectRouter = express.Router();

projectRouter.post("/project", addProject)
  .get("/projects", listProjects)
  .get("/projects/:id", getProject)
  .delete("/project/:id", deleteProject)
  .patch("/project/:id", updateProject);


export default projectRouter