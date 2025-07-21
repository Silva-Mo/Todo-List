import {indexTodosValue, getProjectsArray } from "./projects";
import * as domManipulation from './domMethods';
import * as localStorageStuff from './localStorage'

const addDefaultProjects = () => {

        domManipulation.generateProjectsInSideBar(getProjectsArray());
        domManipulation.showProjectTasks(indexTodosValue(), 0)
        domManipulation.showProjectTitle("Home");
        localStorageStuff.populateStorage();
}

export {addDefaultProjects};