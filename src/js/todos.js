function task(dataOfTask, status  = 'undone') {
    const title = dataOfTask.task_title;
    const description = dataOfTask.task_description;
    const dueDate = dataOfTask.task_dueDate;
    const priority = dataOfTask.priority;
    return {title, description, dueDate, priority, status};
}

export {task};