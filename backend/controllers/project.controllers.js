import { project } from "../models/project.model.js"

export const addProject = async (req, res) => {
  try {
    const { name, desc, techs, liveUrl, repoUrl, gallery } = req.body;

    // Validate required fields
    if (!name || !desc) {
      return res.status(400).json({
        success: false,
        message: "Name and description are required.",
      });
    }

    // Check for duplicate project by name
    const existingProject = await project.findOne({ name });
    if (existingProject) {
      return res.status(409).json({
        success: false,
        message: "A project with this name already exists.",
      });
    }

    // Create the project
    const newProject = await project.create({
      name,
      desc,
      techs: techs || [],
      liveUrl: liveUrl || null,
      repoUrl: repoUrl || null,
      gallery: gallery || [],
    });

    return res.status(201).json({
      success: true,
      message: "Project added successfully.",
      data: newProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};


export const listProjects = async (req, res) => {
  try {
    const projects = await project.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("Error listing projects:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};


export const getProject = async (req, res) => {
  try {
    const { id } = req.params;

    const foundProject = await project.findById(id);
    if (!foundProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: foundProject,
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};