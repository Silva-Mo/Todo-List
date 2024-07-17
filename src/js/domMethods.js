const showModal = (modalContainer) => {
    modalContainer.style.display = "flex";
}

const closeModal = (modalContainer) => {
    modalContainer.style.display = "none";
}

const addProjectInSideBar = (title) => {
    const sidebar = document.querySelector('#sidebar');
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    projectDiv.textContent = title;
    sidebar.appendChild(projectDiv);
}

export {showModal, closeModal,addProjectInSideBar};