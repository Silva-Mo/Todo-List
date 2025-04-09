import editImg from '../imgs/edit.svg';
import deleteImg from '../imgs/delete.svg';
import { changeTaskStatus, deleteTaskFromProject, getTaskDetails, indexTodosValue, getCurrentProjectIndex } from './projects';
import { task } from './todos';
import { showModal, updateModalForm, showProjectTasks } from './domMethods';
import {format} from "date-fns";

const createTaskElement = (taskData) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    taskDiv.setAttribute('data-status', 'unchecked');
    
    if (taskData.priority === "low"){
        taskDiv.style.borderLeft = "4px solid rgb(40, 238, 0)";
    }
    else if (taskData.priority === "medium"){
        taskDiv.style.borderLeft = "4px solid rgb(251, 255, 31)";
    }
    else if (taskData.priority === "high"){
        taskDiv.style.borderLeft = "4px solid rgb(227, 0, 0)";
    }

    const doneCheckBox = document.createElement('input');
    const titleDiv = document.createElement('div');
    const detailsBtn = document.createElement('button');
    const dueDateDiv = document.createElement('div');
    const editImage = document.createElement('img');
    const deleteImage = document.createElement('img');

    doneCheckBox.setAttribute("type","checkbox");
    titleDiv.classList.add("task-title-div");

    if (isDone(taskData) === 'undone'){
        taskDiv.setAttribute('data-status', "unchecked");
        doneCheckBox.checked = false;
    }
    else if (isDone(taskData) === 'done'){
        taskDiv.setAttribute('data-status', "checked");
        doneCheckBox.checked = true;
    }

    titleDiv.textContent = taskData.title;
    detailsBtn.textContent = "Details";
    dueDateDiv.textContent = format(taskData.dueDate,"LLL do");
    editImage.src = editImg;
    deleteImage.src = deleteImg;

   
    doneCheckBox.addEventListener('click', (e) => {
        const taskIndex =  e.target.parentNode.getAttribute("id");
        changeTaskStatus(taskIndex, isDone(taskData));

        if (isDone(taskData) === "done"){
            taskDiv.setAttribute('data-status', "checked");
        }
        else if (isDone(taskData) === "undone"){
            taskDiv.setAttribute('data-status', "unchecked");
        }

    })

    detailsBtn.addEventListener('click', (e) => {
        const modalContainer = document.querySelector('.modal-container');
        const taskIndex =  e.target.parentNode.getAttribute("id");
        createDetailsModal(getTaskDetails(taskIndex));
        showModal(modalContainer, "details");
    })

    editImage.addEventListener('click', (e) => {
        const modalContainer = document.querySelector('.modal-container');
        const taskIndex =  e.target.parentNode.getAttribute("id");
        updateModalForm("Task", true, getTaskDetails(taskIndex));
        showModal(modalContainer, "edit", taskIndex);
    })

    deleteImage.addEventListener('click', (e) => {
        const taskIndex =  e.target.parentNode.getAttribute("id");
        deleteTaskFromProject(taskIndex);
        showProjectTasks(indexTodosValue(), getCurrentProjectIndex());
    })

    const arrayOfElements = [doneCheckBox, titleDiv, detailsBtn, dueDateDiv,editImage, deleteImage]
    arrayOfElements.forEach((element) => {
        taskDiv.appendChild(element);
    })

    return taskDiv;
}

const isDone = (taskData) => {
    if (taskData.status === "undone"){
        return "undone";
    }
    else if(taskData.status === "done"){
        return "done";
    }
}

const createDetailsModal = (taskDetials) => {
    const detailsContentContainer = document.querySelector('.details-content');

    removeChildrenOfDetialsContent(detailsContentContainer);

    const titleH1 = document.createElement("h1");
    const projectNameH3 = document.createElement("h3");
    const priorityH3 = document.createElement("h3");
    const dueDateH3 = document.createElement("h3");
    const descriptionH3 = document.createElement("h3");

    titleH1.textContent = taskDetials[1].title;
    projectNameH3.textContent = `Project: ${taskDetials[0]}`;
    priorityH3.textContent = `Priority: ${taskDetials[1].priority}`;
    dueDateH3.textContent = `Due Date: ${format(taskDetials[1].dueDate,"PPP")}`;
    descriptionH3.textContent = `Description: ${taskDetials[1].description}`;

    const arrayOfElements = [titleH1, projectNameH3, priorityH3, priorityH3, dueDateH3, descriptionH3];

    arrayOfElements.forEach((element) => {
        detailsContentContainer.appendChild(element);
    })
} 

const removeChildrenOfDetialsContent = (detailsContainerOfContent) => {
    while (detailsContainerOfContent.firstChild) {
        detailsContainerOfContent.removeChild(detailsContainerOfContent.lastChild);
      }
}   


export {createTaskElement, isDone}