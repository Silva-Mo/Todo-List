import { addProject as createProject, indexTodosValue } from "./projects";
import * as domManipulation from './domMethods';

const defaultProjects = ["Home", "Today", "Week"];

const addDefaultProjects = () => {
    defaultProjects.forEach((project) => {
        createProject(project);
        domManipulation.addProjectInSideBar(project, false);
        domManipulation.showProjectTasks(indexTodosValue(), 0)
        domManipulation.showProjectTitle("Home");
    }) 
}

export {addDefaultProjects};