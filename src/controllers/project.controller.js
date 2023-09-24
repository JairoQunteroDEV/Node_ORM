import { Project } from "../models/Project.js"

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        console.log(projects);
        res.status(200).json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body;
        const newProject = await Project.create({
            name,
            priority,
            description
        })
        console.log(newProject);
        res.status(200).json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


