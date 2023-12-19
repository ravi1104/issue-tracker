import { createIsuueRepo, getIssueByIdRepo, getSearchResultsRepo } from "./issue.repository.js";
import { projectModel } from "../project/project.schema.js";
export const createIsuuePage = async (req, res) => {
  try {
    const project = await getIssueByIdRepo(req.params.projectId);
    res.render('create-issue', { projectId: req.params.projectId, project });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const createIsuue = async (req, res) => {
  const { title, description, author, label } = req.body;
  const projectId = req.params.projectId;
  try {
    const newIssue = await createIsuueRepo(projectId, title, description, label, author);
    let issue;
    if (newIssue) {
      await projectModel.findByIdAndUpdate(
        { _id: req.params.projectId },
        { $push: { issues: newIssue._id } }
      );

      issue = await getIssueByIdRepo(req.params.projectId);

    }
    res.render('create-issue', { projectId: req.params.projectId, project: issue });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getSearchResults = async (req, res) => {
  try {
    const { search, projectId, title, ...filterParams } = req.query;

    const projects = await projectModel.findById(projectId).populate('issues');

    const issues = projects.issues.filter(issue => {
      let includeIssue = false;

      Object.keys(filterParams).forEach(param => {
        if (param.startsWith('label_')) {
          const label = param.substring(6);
          if (issue.labels.includes(label)) {
            includeIssue = true;
          }
        } 
        if (param.startsWith('author_')) {
          const author = param.substring(7);
          if ((issue.author == author)) {
            includeIssue = true;
          }
        }
      });

      if (issue.title.includes(title)|| issue.description.includes(title)) {
        includeIssue= true;
    
      }

      return includeIssue;
    });




    const labelsSet = new Set();
    projects.issues.forEach(project => {
      project.labels.forEach(label => labelsSet.add(label));
    });
    const labels = [...labelsSet];
    const authorsSet = new Set();
    projects.issues.forEach(project => {
      authorsSet.add(project.author);
    });
    const authors = [...authorsSet];


    projects.issues = issues;
    res.render('details', { projects: [projects], labels, authors });
  } catch (err) {
    res.render('error', { msg: err.message });
  }
}