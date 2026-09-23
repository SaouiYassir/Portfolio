import express from "express"
import {
  addProject,
  listProjects,
  getProject,
  deleteProject
} from "../controllers/project.controllers.js"

const projectRouter = express.Router()

projectRouter.post("/project", addProject)          
projectRouter.get("/projects", listProjects)        
projectRouter.get("/project/:id", getProject)
projectRouter.delete("/project/:id", deleteProject)


export default projectRouter