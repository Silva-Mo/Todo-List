import editImg from '../imgs/edit.svg';
import deleteImg from '../imgs/delete.svg';

const createTaskElement = (taskData) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    
    if (taskData.priority === "low"){
        taskDiv.style.borderLeft = "6px solid rgb(40, 238, 0)";
    }
    else if (taskData.priority === "medium"){
        taskDiv.style.borderLeft = "6px solid rgb(251, 255, 31)";
    }
    else if (taskData.priority === "high"){
        taskDiv.style.borderLeft = "6px solid rgb(227, 0, 0)";
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

    const arrayOfElements = [doneCheckBox, titleDiv, detailsBtn, editImage, deleteImage]
    arrayOfElements.forEach((element) => {
        taskDiv.appendChild(element);
    })

    return taskDiv;
}


export {createTaskElement}