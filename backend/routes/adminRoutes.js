import express from 'express'
import { addAdmin, loginAdmin, deleteAdmin } from '../controllers/admin.controllers.js'

const adminRouter = express.Router();

adminRouter.post("/register", addAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.delete("/admin/:id", deleteAdmin);

export default adminRouter;