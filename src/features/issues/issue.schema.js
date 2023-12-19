
import mongoose from "mongoose";

const issuesSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  labels:[String],
  author:{
    type:String,
    required:true,
  },  
  project:{
    type:mongoose.Types.ObjectId,
    ref:'project'
  }
});

export const  issuesModel=mongoose.model('issue',issuesSchema);