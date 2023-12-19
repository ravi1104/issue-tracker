import { issuesModel } from "./issue.schema.js";

import mongoose from "mongoose";
export const createIsuueRepo = async (projectId, title, description, label, author) => {
  const newIssue = new issuesModel({
    title,
    description,
    labels: label,
    author,
    project: projectId
  });
  return await newIssue.save();
}


export const getIssueByIdRepo = async (id) => {

  return await issuesModel.find({ project: new mongoose.Types.ObjectId(id) });
}


export const getSearchResultsRepo = async (filter) => {
  const projects = await issuesModel.find(filter);
  return projects;

};


