import deletedImage from "../imgs/empty.svg"
import { task } from "./todos";
import * as formElements from "./formDomElements";
import * as formMehthods from "./formMethods";
import * as todoElements from "./todoElements";
import { indexTodosValue, changeCurrentProject, deleteProjectFromProjects } from "./projects";



const showModal = (modalContainer, choiceOfModal, taskIndexOfEdit = null) => {
    const addModal = document.querySelector('.add-modal');
    const detailsModal = document.querySelector('.details-modal');
    const editModal = document.querySelector('.edit-modal')

    modalContainer.style.display = "flex";
        if (choiceOfModal === "add"){
            addModal.style.display = "flex";
            detailsModal.style.display = "none";
            editModal.style.display = "none";
        }
        else if (choiceOfModal === "details"){
            addModal.style.display = "none";
            detailsModal.style.display = "flex";
            editModal.style.display = "none";
        }
        else if (choiceOfModal === "edit"){
            addModal.style.display = "none";
            detailsModal.style.display = "none";
            editModal.style.display = "flex";
            editModal.setAttribute('data-taskIndexToBeEdited', taskIndexOfEdit);
        }
}

const closeModal = (modalContainer) => {
    modalContainer.style.display = "none";
}

const addProjectInSideBar = (title, newProject) => {
    let projectsContainer;

    if (newProject === false){
        projectsContainer =  document.querySelector('.default-projects-container');
    }
    else {
        projectsContainer = document.querySelector('.new-projects-container');
    }
    
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    projectDiv.textContent = title;
    projectsContainer.appendChild(projectDiv);
    assignIdtoProjectElement();
    
    projectDiv.addEventListener('click', (e) => {
        const projectDivs = document.querySelectorAll('.project-div');
        const projectIndex = projectDiv.getAttribute("id");
        changeCurrentProject(projectIndex);
        const todosOfProject = indexTodosValue();
        showProjectTitle(projectDiv.textContent);
        showProjectTasks(todosOfProject, projectIndex);
        addStyleOnlyForSelected(projectDivs, projectIndex, 'rgb(218, 159, 252)');
    })
    
}

const clearTodoDiv = () => {
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    todosContainerDiv.textContent = "";
}

const showProjectTasks = (projectTodos, projectIndex) => {
    clearTodoDiv();
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    const projectTasksText = document.createElement('h2');
    projectTasksText.classList.add('project-tasks-txt');

    if (projectTodos == 0){
        projectTasksText.textContent = "There are no tasks added here!";
        todosContainerDiv.appendChild(projectTasksText);
        if (projectIndex < 3){
            return;
        }
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.textContent = "Delete Project";

        deleteProjectBtn.addEventListener('click', (e) => {
            deleteProject(deleteProjectFromProjects());
            assignIdtoProjectElement();
            clearTodoDiv()

            const h2EmptyMessage = document.createElement('h2');
            const emptyImage = document.createElement("img");

            h2EmptyMessage.textContent = "Nothing is here tbh, please select a project :)"; 
            emptyImage.src = deletedImage;

            emptyImage.style.width = "200px"
            emptyImage.style.padding = "20px"
            h2EmptyMessage.style.marginTop = "0px";

            showProjectTitle("Empty :)")
            todosContainerDiv.appendChild(emptyImage);
            todosContainerDiv.appendChild(h2EmptyMessage);
        })

        todosContainerDiv.appendChild(deleteProjectBtn);
    }
    else {
        generateTasksOfProjectinDOM();
    }
}

const deleteProject =  (projectIndex) => {
        const container = document.querySelector(".new-projects-container");
        container.childNodes.forEach((element) => {
            if (element.id === projectIndex.toString()){
                container.removeChild(element);
            }
        })

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

const updateModalForm = (option, editMode = null, taskData = null) => {

    if (editMode === true) {
        const formElement = document.querySelector('.edit-modal form');
        formElement.setAttribute('id', 'edit-task');

        const submitBtn = document.querySelector('.edit-modal button.submit');
        const resetBtn = document.querySelector('.edit-modal button.reset');

        removeFormChildren(formElement);

        const taskFormEelemnts = formElements.createTaskForm(taskData);
        const submitContainer = document.querySelector('.edit-modal .submit_container');
        for (let index = 0; index < taskFormEelemnts.length; index++) {
            formElement.insertBefore(taskFormEelemnts[index], submitContainer);
        }
    
        submitBtn.setAttribute('form', 'edit-task');
    }

    else{
        const formElement = document.querySelector('.add-modal form');
        const submitBtn = document.querySelector('button.submit');
        const resetBtn = document.querySelector('.add-modal button.reset');

        removeFormChildren(formElement);

        if (option === "Task"){
            formElement.setAttribute('id', 'add-task');
            const taskFormEelemnts = formElements.createTaskForm();
            const submitContainer = document.querySelector('.add-modal .submit_container');
            for (let index = 0; index < taskFormEelemnts.length; index++) {
                formElement.insertBefore(taskFormEelemnts[index], submitContainer);
            }
    
            submitBtn.setAttribute('form', 'add-task');
        }
        else if (option === "Project"){
            formElement.setAttribute('id', 'add-project');
            const projectFormElements = formElements.createProjectForm();
            const submitContainer = document.querySelector('.add-modal .submit_container');
            for (let index = 0; index < projectFormElements.length; index++) {
                formElement.insertBefore(projectFormElements[index], submitContainer);
            }
    
            submitBtn.setAttribute('form', 'add-project');
        }
        else if (option === "Note"){
            formElement.setAttribute('id', 'add-note');
            const projectFormElements = formElements.createNotesForm();
            const submitContainer = document.querySelector('.add-modal .submit_container');
            for (let index = 0; index < projectFormElements.length; index++) {
                formElement.insertBefore(projectFormElements[index], submitContainer);
            }
    
            submitBtn.setAttribute('form', 'add-note');
        }
    }
    
    
}

const clickFirstModalOptionOnLoad = () => {
    const firstOption = document.querySelector('.modal-sidebar').firstElementChild;
    firstOption.click();
}

const addStyleOnlyForSelected = (elements, idOfElementToBeSelected, color) => {
    console.log(elements);
    elements.forEach((element) => {
        if (element.getAttribute('id') === idOfElementToBeSelected){
            element.style.borderBottom = `3px solid ${color}`;
            element.style.color = color;
        }
        else{
            element.style.borderBottom = `3px solid transparent`;
            element.style.color = 'white';
        }
    })
}

const removeFormChildren = (form) => {  
    for (let index = 0; index < form.childNodes.length; index++) {
        if (form.firstElementChild && form.firstElementChild.className !== "submit_container"){
            form.removeChild(form.firstElementChild);
        }
    }
}

const resetForm = (form) => {
    const inputsOfForm = document.querySelectorAll(`#${form.getAttribute('id')} input`);
    const textareasOfForm = document.querySelectorAll(`#${form.getAttribute('id')} textarea`);
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
    for (let index = 0; index < tasksOfProject.length; index++) {
        const task  = tasksOfProject[index];
        const taskElement = todoElements.createTaskElement(task);
        taskElement.setAttribute('id', `${index}`);
        tasksContainer.appendChild(taskElement);
    }
}

export {showModal, closeModal,addProjectInSideBar, showProjectTasks, 
    showProjectTitle, addStyleOnlyForSelected, updateModalForm, 
    clickFirstModalOptionOnLoad, checkForFormNameIfEqualsOption, resetForm
};