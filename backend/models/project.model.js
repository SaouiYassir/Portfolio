import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  techs: {
    type: [String],
    default: [],
  },
  liveUrl: {
    type: String,
    trim: true,
    default: null,
  },
  repoUrl: {
    type: String,
    trim: true,
    default: null,
  },
  gallery: {
    type: [String],
    required: true,
    default: [],
  },
},{timestamps: true,});

export const project = mongoose.model("Project", projectSchema);