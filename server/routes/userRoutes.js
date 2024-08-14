import express from "express";
import userController from "../controller/userController.js";
const router = express.Router();

router.get("/users", userController.getAllusers);
router.get("/user/:id", userController.getOneuser);
router.post("/user", userController.adduser);

export default router;
