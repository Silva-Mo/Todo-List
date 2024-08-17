import '../css/normalize.css';
import '../css/styles.css';
import {addProject as createProject, projectIndexNum, indexTodosValue} from "./projects.js";
import * as domManipulation from './domMethods.js';
import * as formMehthods from './formMethods.js';
import * as defaults from './defaultTodo.js';

defaults.addDefaultProjects();

const addProject = document.querySelector('.add-project-container');
const addTask = document.querySelector('.add-task-container');
const submitBtn = document.querySelector('.submit');
const modalContainer = document.querySelector('.modal-container');
const titleInput = document.querySelector('input');
const form = document.querySelector('form');
const closeModalBtn = document.querySelector('.close img');
const projectDivs = document.querySelectorAll('.project-div');

addProject.addEventListener('click', () => {
    domManipulation.showModal(modalContainer);
})

closeModalBtn.addEventListener('click', () => {
    domManipulation.closeModal(modalContainer);
    formMehthods.resetInput(titleInput);
})

submitBtn.addEventListener('click', (e) => {
    if (form.checkValidity()){
        e.preventDefault(); 
        createProject(formMehthods.getInfoFromInput(titleInput));
        domManipulation.addProjectInSideBar(formMehthods.getInfoFromInput(titleInput));
        domManipulation.closeModal(modalContainer);
        formMehthods.resetInput(titleInput);
    }
})

projectDivs.forEach((projectDiv) => {
    projectDiv.addEventListener('click', () => {
        const projectIndex = projectIndexNum(projectDiv.textContent);
        const todosOfProject = indexTodosValue(projectIndex);
        domManipulation.clearTodoDiv();
        domManipulation.showProjectTitle(projectDiv.textContent);
        domManipulation.showProjectTasks(todosOfProject);
    })
}) 