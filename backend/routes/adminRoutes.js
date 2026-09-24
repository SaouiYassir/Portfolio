import express from 'express'
import { getAdmins, addAdmin, loginAdmin, deleteAdmin } from '../controllers/admin.controllers.js'

const adminRouter = express.Router();

adminRouter.get("/admins", getAdmins);
adminRouter.post("/register", addAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.delete("/admin/:id", deleteAdmin);

export default adminRouter;