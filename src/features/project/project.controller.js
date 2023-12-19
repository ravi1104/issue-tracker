import { createProjectRepo, geAllProjectsRepo, getDetailsRepo } from "./project.repository.js";

export const postcreateProject = async (req, res) => {
  try {
    const projects = await createProjectRepo(req.body);
    res.redirect('home');
  } catch (err) {
    res.render('error', { msg: err.message });
  }
};

export const getDetails = async (req, res) => {
  try {

    const projectId = req.params.id;
    const projects = await getDetailsRepo(projectId);
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

    res.render('details', { projects: [projects] ,labels,authors});
  } catch (err) {
    console.log(err);
    res.render('error', { msg: "no projects found" });
  }
};


export const getAllProjects = async (req, res) => {
  try {
    const projects = await geAllProjectsRepo();
    res.render('home', { projects });
  } catch (err) {

    res.render('error', { msg: "Internal Server Error" });
  }
};
