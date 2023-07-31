import express from "express";
import { updateUser } from "../Controllers/User.js";


//router object
const router = express.Router();

//FORGOT Password || POST
router.put('/update-profile',updateUser);


export default router;