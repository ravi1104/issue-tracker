import express from "express";
import { postcreateProject,getAllProjects ,getDetails} from "./src/features/project/project.controller.js";
import { createIsuuePage,createIsuue,getSearchResults } from "./src/features/issues/issue.controller.js";
import path from "path";
import expressEjsLayouts from 'express-ejs-layouts';
const app = express();

app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('src', 'views'));


//Routes
app.get("/home",getAllProjects);
app.post("/create-new-project",postcreateProject);
app.get("/create",(req,res)=>{
    res.render('create-project');
});
app.get("/details/:id", getDetails);
app.get("/details/:id/search",getSearchResults);
app.post("/issue/create/:projectId",createIsuue);
app.get("/issue/:projectId",createIsuuePage);

app.get('*', (req, res) => {
    res.send('Invalid URL');
});


export default app;
