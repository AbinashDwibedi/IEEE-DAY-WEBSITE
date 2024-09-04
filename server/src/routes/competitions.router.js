import { registerCompetitor , retriveCompetitorsData } from "../controllers/competitions.controller.js";
import { Router } from "express";

const router = Router();

router.route("/register" ).post(registerCompetitor);
router.route("/competitors").get(retriveCompetitorsData);
export default router

