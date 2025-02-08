import { task } from "./todos";
import * as formElements from "./formDomElements";
import * as formMehthods from "./formMethods";
import * as todoElements from "./todoElements";
import { indexTodosValue } from "./projects";

const showModal = (modalContainer) => {
    modalContainer.style.display = "flex";
}

const closeModal = (modalContainer) => {
    modalContainer.style.display = "none";
}

const addProjectInSideBar = (title) => {
    const projectsContainer = document.querySelector('.default-projects-container');
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    projectDiv.textContent = title;
    projectsContainer.appendChild(projectDiv);
    assignIdtoProjectElement();
}

const clearTodoDiv = () => {
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    const projectTilte = document.querySelector('#todos-container h1');
    projectTilte.textContent = "";
    todosContainerDiv.textContent = "";
}

const showProjectTasks = (projectTodos) => {
    clearTodoDiv();
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    const projectTasksText = document.createElement('h2');
    projectTasksText.classList.add('project-tasks-txt');

    if (projectTodos == 0){
        projectTasksText.textContent = "There are no tasks added here!";
    }
    else {
        generateTasksOfProjectinDOM();
    }
    

    todosContainerDiv.appendChild(projectTasksText);
}

const showProjectTitle = ((projectTitle) => {
    const projectTitleText = document.querySelector('#todos-container h1');
    projectTitleText.textContent = projectTitle;
})



const checkForFormNameIfEqualsOption = (form, option) => {
    if (form.getAttribute("id")){
        const optionName = form.getAttribute("id").slice(4);
        const optionNameCapilizedFirstLetter = optionName.charAt(0).toUpperCase() + optionName.slice(1);
        if (option === optionNameCapilizedFirstLetter){
            return true;
        }
    }
}

const updateModalForm = (option) => {
    const formElement = document.querySelector('form');
    const submitBtn = document.querySelector('button.submit');
    const resetBtn = document.querySelector('button.reset');

    removeFormChildren(formElement);

    if (option === "Task"){
        formElement.setAttribute('id', 'add-task');

        const taskFormEelemnts = formElements.createTaskForm();
        const submitContainer = document.querySelector('.submit_container');
        for (let index = 0; index < taskFormEelemnts.length; index++) {
            formElement.insertBefore(taskFormEelemnts[index], submitContainer);
        }

        submitBtn.setAttribute('form', 'add-task');
    }
    else if (option === "Project"){
        formElement.setAttribute('id', 'add-project');
        const projectFormElements = formElements.createProjectForm();
        const submitContainer = document.querySelector('.submit_container');
        for (let index = 0; index < projectFormElements.length; index++) {
            formElement.insertBefore(projectFormElements[index], submitContainer);
        }

        submitBtn.setAttribute('form', 'add-project');
    }
    else if (option === "Note"){
        formElement.setAttribute('id', 'add-note');
        const projectFormElements = formElements.createNotesForm();
        const submitContainer = document.querySelector('.submit_container');
        for (let index = 0; index < projectFormElements.length; index++) {
            formElement.insertBefore(projectFormElements[index], submitContainer);
        }

        submitBtn.setAttribute('form', 'add-note');
    }
}

const clickFirstModalOptionOnLoad = () => {
    const firstOption = document.querySelector('.modal-sidebar').firstElementChild;
    firstOption.click();
}

const clickFirstProjectOnload = () => {
    const firstProjcet = document.querySelector('.default-projects-container').firstElementChild;
    firstProjcet.click();
}

const addStyleforselected = ((element, color) => {
    element.style.borderBottom = `3px solid ${color}`;
    element.style.color = color;
})

const removeStylefromNotSelected = ((elements) => {
    elements.forEach((element) => {
        element.style.borderBottom = "3px solid transparent";
        element.style.color = "white";
    })
})

const removeFormChildren = (form) => {  
    for (let index = 0; index < form.childNodes.length; index++) {
        if (form.firstElementChild && form.firstElementChild.className !== "submit_container"){
            form.removeChild(form.firstElementChild);
        }
    }
}

const resetForm = () => {
    const inputsOfForm = document.querySelectorAll('form input');
    const textareasOfForm = document.querySelectorAll ('form textarea');
    const arrayOfAllelementsOfForm = Array.from(inputsOfForm).concat(Array.from(textareasOfForm));
    arrayOfAllelementsOfForm.forEach((element) => {
        formMehthods.resetInput(element);
    })
}

const assignIdtoProjectElement = () => {
    const projectDivs = document.querySelectorAll(".project-div");
    let indexNum = 0;
    projectDivs.forEach((projectDiv) => {
        projectDiv.setAttribute("id", `${indexNum}`)
        indexNum += 1;
    })
}

const generateTasksOfProjectinDOM = () => {
    const tasksContainer = document.querySelector('.todos div');
    const tasksOfProject = indexTodosValue();
    tasksOfProject.forEach((task) => {
        const taskElement = todoElements.createTaskElement(task);
        tasksContainer.appendChild(taskElement);
    })
}

export {showModal, closeModal,addProjectInSideBar, showProjectTasks, 
    showProjectTitle, clickFirstProjectOnload, addStyleforselected, removeStylefromNotSelected, 
    updateModalForm, clickFirstModalOptionOnLoad, checkForFormNameIfEqualsOption, resetForm
};