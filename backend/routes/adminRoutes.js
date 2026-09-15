import express from 'express'
import { addAdmin, loginAdmin } from '../controllers/admin.controllers.js'

const adminRouter = express.Router();

adminRouter.post("/register", addAdmin);
adminRouter.post("/login", loginAdmin);

export default adminRouter;