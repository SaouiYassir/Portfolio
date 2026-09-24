import { project } from "../models/project.model.js"
import mongoose from "mongoose";

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

export const deleteProject = async (req, res) => {
  try {
    const {id} = req.params;

    const deleted = await project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
      data: deleted,
    });

  } catch(err) {
    console.error("Error deleting project:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, techs, liveUrl, repoUrl, gallery } = req.body;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID",
      });
    }

    const existingProject = await project.findById(id);

    if (!existingProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const updateData = {};

    if (name !== undefined) updateData.name = name.trim();
    if (desc !== undefined) updateData.desc = desc.trim();
    if (techs !== undefined) updateData.techs = techs;
    if (liveUrl !== undefined) updateData.liveUrl = liveUrl;
    if (repoUrl !== undefined) updateData.repoUrl = repoUrl;
    if (gallery !== undefined) updateData.gallery = gallery;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided to update",
      });
    }

    const updatedProject = await project.findByIdAndUpdate(
      id,
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (err) {
    console.error("================================");
    console.error("UPDATE PROJECT ERROR");
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    console.error("Full error:", err);
    console.error("================================");

    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(
        (e) => e.message
      );

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    if (err.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid data format",
        error: err.message,
      });
    }

    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Duplicate field value entered",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error while updating project",
      error: err.message,
    });
  }
};