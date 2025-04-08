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

export {addProject, indexTodosValue, changeCurrentProject, addTasktoProject, 
    changeTaskStatus, getTaskDetails, editTask, deleteTaskFromProject
};