let projects = [{title: "Home", todos: []},
                  {title: "Today", todos: []},
                  {title: "Week", todos: []},
];

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

let currentProject = 0;

const changeCurrentProject = ((indexOfProjectClicked) => {
    currentProject = indexOfProjectClicked;
    console.log(currentProject);
})

const addTasktoProject = (taskData) => {
    projects[currentProject].todos.push(taskData);
}

const changeTaskStatus = (taskIndex, previousTaskstatus) => {
    if(previousTaskstatus === "undone"){
        projects[currentProject].todos[taskIndex].status = "done"; 
    }
    else if (previousTaskstatus === "done"){
        projects[currentProject].todos[taskIndex].status = "undone"; 
    }
    console.log(projects[currentProject].todos);
}

const getTaskDetails = (taskIndex) => {
    return [projects[currentProject].title,projects[currentProject].todos[taskIndex]];
}

const editTask = (taskIndex, taskNewData) => {
    const taskOfInterest = projects[currentProject].todos[taskIndex];
    taskOfInterest.title = taskNewData.title;
    taskOfInterest.description = taskNewData.description;
    taskOfInterest.dueDate = taskNewData.dueDate;
    taskOfInterest.priority = taskNewData.priority;
}

const deleteTaskFromProject = (taskIndex) => {
    projects[currentProject].todos.splice(taskIndex, 1);
    console.log(projects[currentProject].todos);
}

const deleteProjectFromProjects = () =>{
    projects.splice(currentProject, 1);
    return currentProject;
}

const getCurrentProjectIndex = () => {
    return currentProject;
}

const getProjectTodos = (projectIndex) => {
    console.log(projectIndex);
    return projects[projectIndex].todos;
}

const checkIfProjectsTodosExists = () => {
    if (projects.length !== 0){
        return true;
    }
    else {
        return false;
    }
}

const setSavedProjects = (savedHome, savedToday, savedWeek, newProjects) => {
    projects[0].todos = savedHome;
    projects[1].todos = savedToday;
    projects[2].todos = savedWeek;
    newProjects.forEach((object) => {
        projects.push(object);
    })  
}

const getProjectsArray = () => {
    return projects;
}

const getNewProjectsArray = () => {
    const splicedProjects = projects.slice(3);
    return splicedProjects;
}

export {addProject, indexTodosValue, changeCurrentProject, addTasktoProject, 
    changeTaskStatus, getTaskDetails, editTask, deleteTaskFromProject, deleteProjectFromProjects, 
    getCurrentProjectIndex, getProjectTodos, setSavedProjects, checkIfProjectsTodosExists, 
    getProjectsArray, getNewProjectsArray
};