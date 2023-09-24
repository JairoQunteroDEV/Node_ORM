import { Project } from "../models/Project.js"

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
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
        res.status(200).json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(id)
        project.set(req.body)

        await project.save()
        res.status(200).json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

