import { projectModel } from './project.schema.js';


export const createProjectRepo = async (data) => {

    const newProject=new projectModel(data);
    return newProject.save();
};

export const geAllProjectsRepo = async () => {
    const projects = await projectModel.find();

    return projects;
  
};
export const getDetailsRepo=async (id)=>{
  const details=await projectModel.findById(id).populate("issues").exec();
  return details;
}


