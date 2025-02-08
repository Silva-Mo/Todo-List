import '../css/normalize.css';
import '../css/styles.css';
import {addProject as createProject, projectIndexNum, indexTodosValue, changeCurrentProject, addTasktoProject} from "./projects.js";
import * as domManipulation from './domMethods.js';
import * as formMehthods from './formMethods.js';
import * as defaults from './defaultTodo.js';
import {task as createTask} from "./todos.js";

defaults.addDefaultProjects();

const add = document.querySelector('.add-container');
const submitBtn = document.querySelector('.submit');
const modalContainer = document.querySelector('.modal-container');
const form = document.querySelector('form');
const closeModalBtn = document.querySelector('.close img');
const projectDivs = document.querySelectorAll('.project-div');
const addOptions = document.querySelectorAll('.modal-sidebar h3');
const clearFormBtn = document.querySelector('.reset');


add.addEventListener('click', () => {
    domManipulation.showModal(modalContainer);
})

closeModalBtn.addEventListener('click', () => {
    domManipulation.closeModal(modalContainer);
})

submitBtn.addEventListener('click', (e) => {
    if (form.checkValidity()){
        e.preventDefault(); 
        if (submitBtn.getAttribute('form') === 'add-task'){
            const taskData = createTask(formMehthods.dataOfFormSubmitted());
            addTasktoProject(taskData);
            domManipulation.showProjectTasks();
            domManipulation.resetForm();
            domManipulation.closeModal(modalContainer);
        }
    }
})

projectDivs.forEach((projectDiv) => {
    projectDiv.addEventListener('click', () => {
        const projectIndex = projectDiv.getAttribute("id");
        changeCurrentProject(projectIndex);
        const todosOfProject = indexTodosValue();
        domManipulation.showProjectTitle(projectDiv.textContent);
        domManipulation.showProjectTasks(todosOfProject);
        domManipulation.removeStylefromNotSelected(projectDivs);
        domManipulation.addStyleforselected(projectDiv, "rgb(218, 159, 252)");
    })
}) 

domManipulation.clickFirstProjectOnload();

addOptions.forEach((addOption) => {
    addOption.addEventListener('click', (e) => {
        domManipulation.removeStylefromNotSelected(addOptions);
        domManipulation.addStyleforselected(addOption, "white");
        const option = e.target.textContent;
        if (domManipulation.checkForFormNameIfEqualsOption(form, option)){
            return;
        }
        else{
            domManipulation.updateModalForm(option);   
        }
    })
})

clearFormBtn.addEventListener('click', () => {
    domManipulation.resetForm();
})

domManipulation.clickFirstModalOptionOnLoad();