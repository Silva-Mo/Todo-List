import editImg from '../imgs/edit.svg';
import deleteImg from '../imgs/delete.svg';
import { changeTaskStatus, getTaskDetails } from './projects';
import { task } from './todos';
import { showModal } from './domMethods';

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
    const editImage = document.createElement('img');
    const deleteImage = document.createElement('img');

    doneCheckBox.setAttribute("type","checkbox");
    titleDiv.textContent = taskData.title;
    detailsBtn.textContent = "Details";
    editImage.src = editImg;
    deleteImage.src = deleteImg;

    let statusOfCheckbox;

    doneCheckBox.addEventListener('click', (e) => {
        statusOfCheckbox = isChecked(doneCheckBox);
        const taskIndex =  e.target.parentNode.getAttribute("id");
        changeTaskStatus(taskIndex, statusOfCheckbox);

        if (statusOfCheckbox === "checked"){
            taskDiv.setAttribute('data-status', "checked");
        }
        else if (statusOfCheckbox === "unchecked"){
            taskDiv.setAttribute('data-status', "unchecked");
        }

    })

    detailsBtn.addEventListener('click', (e) => {
        const modalContainer = document.querySelector('.modal-container');
        const taskIndex =  e.target.parentNode.getAttribute("id");
        createDetailsModal(getTaskDetails(taskIndex));
        showModal(modalContainer, "details");
    })

    const arrayOfElements = [doneCheckBox, titleDiv, detailsBtn, editImage, deleteImage]
    arrayOfElements.forEach((element) => {
        taskDiv.appendChild(element);
    })

    return taskDiv;
}

let flagOfChecking = null;

const isChecked = (checkbox) => {
        if (checkbox.checked === true){
            flagOfChecking = "checked";
        }
        else if(checkbox.checked === false){
            flagOfChecking = "unchecked";
        }
        return flagOfChecking ;
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
    dueDateH3.textContent = `Due Date: ${taskDetials[1].dueDate}`;
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


export {createTaskElement, isChecked}