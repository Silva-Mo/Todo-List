const projects = [];

function project(title) {
    const todos = [];
    return {title, todos};
}

const addProject = (title) => {
    const projectVar = project(title);
    projects.push(projectVar);
    console.log(projects);
}

const indexTodosValue = (() => {
    const projectTasks = projects[currentProject].todos;
    return projectTasks;
})

let currentProject = null;

const changeCurrentProject = ((indexOfProjectClicked) => {
    currentProject = indexOfProjectClicked;
    console.log(currentProject);
})

const addTasktoProject = (taskData) => {
    projects[currentProject].todos.push(taskData);
}

export {addProject, indexTodosValue, changeCurrentProject, addTasktoProject};