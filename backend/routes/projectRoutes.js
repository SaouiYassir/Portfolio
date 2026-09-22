import express from "express"
import {
  addProject,
  listProjects
} from "../controllers/project.controllers.js"

const projectRouter = express.Router()

projectRouter.post("/project", addProject)          
projectRouter.get("/projects", listProjects)        


export default projectRouter