import { Router } from "express";
import { getProjects, createProject, deleteProject, updateProject } from "../controllers/project.controller.js";
const router = Router();

router.get("/projects",getProjects)
router.post("/projects",createProject)
router.put("/projects/:id",updateProject)
router.delete("/projects/:id",deleteProject)

export default router;