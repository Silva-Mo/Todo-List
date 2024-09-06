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

const projectIndexNum = ((title) => {
    const indexNum = projects.findIndex((element) => element.title === title);
    return indexNum;
})

const indexTodosValue = ((projectIndex) => {
    const projectTasks = projects[projectIndex].todos;
    console.log(projectTasks);
    return projectTasks;
})

let currentProject = null;

const changeCurrentProject = ((projectClicked) => {
    currentProject = projectClicked;
})


export {addProject, projectIndexNum, indexTodosValue, changeCurrentProject};