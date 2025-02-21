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

const changeTaskStatus = (taskIndex, checkboxStatus) => {
    if(checkboxStatus === "checked"){
        projects[currentProject].todos[taskIndex].status = "done"; 
    }
    else if (checkboxStatus === "unchecked"){
        projects[currentProject].todos[taskIndex].status = "undone"; 
    }
    console.log(projects[currentProject].todos);
}

const getTaskDetails = (taskIndex) => {
    return [projects[currentProject].title,projects[currentProject].todos[taskIndex]];
}

export {addProject, indexTodosValue, changeCurrentProject, addTasktoProject, changeTaskStatus, getTaskDetails};