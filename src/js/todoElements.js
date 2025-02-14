import editImg from '../imgs/edit.svg';
import deleteImg from '../imgs/delete.svg';
import { changeTaskStatus } from './projects';
import { task } from './todos';

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


export {createTaskElement, isChecked}