const createTaskElement = (taskData) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task_Div');
    taskDiv.textContent = `${taskData.title}`;
    return taskDiv;
}

export {createTaskElement}