import '../css/normalize.css';
import '../css/styles.css';
import {addProject as createProject, projectIndexNum, indexTodosValue, changeCurrentProject, addTasktoProject, editTask} from "./projects.js";
import * as domManipulation from './domMethods.js';
import * as formMehthods from './formMethods.js';
import * as defaults from './defaultTodo.js';
import {task as createTask} from "./todos.js";

defaults.addDefaultProjects();

const add = document.querySelector('.add-container');
const addSubmitBtn = document.querySelector('.add-modal .submit');
const editSubmitBtn = document.querySelector('.edit-modal .submit');
const modalContainer = document.querySelector('.modal-container');
const addForm = document.querySelector('.add-modal form');
const editForm = document.querySelector('.edit-modal form');
const closeModalBtn = document.querySelectorAll('.close img');
const projectDivs = document.querySelectorAll('.project-div');
const addOptions = document.querySelectorAll('.modal-sidebar h3');
const clearFormBtn = document.querySelector('.reset');

domManipulation.addStyleOnlyForSelected(projectDivs, "0",'rgb(218, 159, 252)');

add.addEventListener('click', () => {
    domManipulation.showModal(modalContainer, "add");
})

closeModalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    domManipulation.closeModal(modalContainer);
})
})

addSubmitBtn.addEventListener('click', (e) => {
    if (addForm.checkValidity()){
        e.preventDefault(); 
        if (addSubmitBtn.getAttribute('form') === 'add-task'){
            const taskData = createTask(formMehthods.dataOfFormSubmitted(addForm));
            addTasktoProject(taskData);
            domManipulation.showProjectTasks();
            domManipulation.resetForm(addForm);
            domManipulation.closeModal(modalContainer);
        }
        else if (addSubmitBtn.getAttribute('form') === 'add-project'){
            const projectTitle = formMehthods.dataOfFormSubmitted(addForm)["project-title"];
            createProject(projectTitle);
            domManipulation.addProjectInSideBar(projectTitle, true);
        }
    }
})

editSubmitBtn.addEventListener('click', (e) => {
    if (editForm.checkValidity()){
        e.preventDefault(); 
        const taskIndex = document.querySelector('.edit-modal').getAttribute('data-taskIndexToBeEdited');
        const taskData = createTask(formMehthods.dataOfFormSubmitted(editForm));
        editTask(taskIndex, taskData);
            domManipulation.showProjectTasks();
            domManipulation.resetForm(editForm);
            domManipulation.closeModal(modalContainer);
    }
})

addOptions.forEach((addOption) => {
    addOption.addEventListener('click', (e) => {
        domManipulation.addStyleOnlyForSelected(addOptions ,"white", null);
        const option = e.target.textContent;
        if (domManipulation.checkForFormNameIfEqualsOption(addForm, option)){
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