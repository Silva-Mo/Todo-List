import { addProject as createProject, indexTodosValue } from "./projects";
import * as domManipulation from './domMethods';

const defaultProjects = ["Home", "Today", "Week"];

const addDefaultProjects = () => {
    defaultProjects.forEach((project) => {
        createProject(project);
        domManipulation.addProjectInSideBar(project);
        domManipulation.showProjectTasks(indexTodosValue())
        domManipulation.showProjectTitle("Home");
    }) 
}

export {addDefaultProjects};