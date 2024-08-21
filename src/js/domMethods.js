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
}

const clearTodoDiv = () => {
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    const projectTilte = document.querySelector('#todos-container h1');
    projectTilte.textContent = "";
    todosContainerDiv.textContent = "";
}

const showProjectTasks = (projectTodos) => {
    const todosContainerDiv = document.querySelector('#todos-container .todos div');
    const projectTasksText = document.createElement('h2');
    projectTasksText.classList.add('project-tasks-txt');

    if (projectTodos == 0){
        console.log("yes")
        projectTasksText.textContent = "There are no tasks added here!";
    }
    else {
        return;
    }
    

    todosContainerDiv.appendChild(projectTasksText);
}

const showProjectTitle = ((projectTitle) => {
    const projectTitleText = document.querySelector('#todos-container h1');
    projectTitleText.textContent = projectTitle;
})

const addFormToModal = ((option) => {
    //
})

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

export {showModal, closeModal,addProjectInSideBar, showProjectTasks, clearTodoDiv, 
    showProjectTitle, clickFirstProjectOnload, addStyleforselected, removeStylefromNotSelected
};