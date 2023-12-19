import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name of project utmost important"]
  },
  description:{
    type:String,
    required:[true,"Description is required"]
  },
  author:{
    type:String,
    required:[true,"author name is required for project"]
  },
  issues:[{
    type:mongoose.Types.ObjectId,
    ref:'issue'
  }]
});

export const projectModel=mongoose.model("project",projectSchema);