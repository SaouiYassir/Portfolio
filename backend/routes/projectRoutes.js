import express from "express"
import {
  addProject,
  listProjects,
  getProject
} from "../controllers/project.controllers.js"

const projectRouter = express.Router()

projectRouter.post("/project", addProject)          
projectRouter.get("/projects", listProjects)        
projectRouter.get("/project/:id", getProject)


export default projectRouter