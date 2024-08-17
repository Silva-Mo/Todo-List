import { addProject as createProject } from "./projects";
import * as domManipulation from './domMethods';

const defaultProjects = ["Home", "Today", "Week"];

const addDefaultProjects = () => {
    defaultProjects.forEach((project) => {
        createProject(project);
        domManipulation.addProjectInSideBar(project);
    }) 
}

export {addDefaultProjects};