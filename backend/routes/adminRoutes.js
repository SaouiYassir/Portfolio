import express from 'express'
import { addUser } from '../controllers/admin.controllers.js'

const adminRouter = express.Router();

adminRouter.post("/register", addUser);

export default adminRouter;