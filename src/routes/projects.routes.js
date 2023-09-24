import { Router } from "express";
import { getProjects, createProject } from "../controllers/project.controller.js";
const router = Router();

router.get("/projects",getProjects)
router.post("/projects",createProject)
router.put("/projects",(req,res)=>{})
router.delete("/projects",(req,res)=>{})

export default router;