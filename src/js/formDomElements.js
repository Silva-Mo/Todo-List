import { resetInput } from "./formMethods";

const createInput = (labelTxt ,inputType, inputName, inputId, isRequired, minlength = null, maxlength = null, value = null, priorityType = null) => {
    const containerDiv = document.createElement('div');

    if (inputType === "radio"){
        containerDiv.classList.add('radio-container');
    }
    else{
        containerDiv.classList.add('input-container');
    }

    if (inputType === "date"){
        containerDiv.classList.add("date");
    }

    const label = document.createElement('label');
    label.setAttribute('for', `${inputId}`);
    label.textContent = `${labelTxt}`;

    let input = document.createElement('input');
    input.setAttribute('type', `${inputType}`);

    if (inputType === "textarea"){
        input = document.createElement('textarea');
        input.removeAttribute('type');
    }
    
    input.setAttribute('name', `${inputName}`);
    input.setAttribute('id', `${inputId}`);

    if (inputType === 'radio' && priorityType === 'add'){
        label.setAttribute('for', `add-${inputId}`);
        input.setAttribute('id', `add-${inputId}`);
    }
    else if (inputType === 'radio' && priorityType === 'edit'){
        label.setAttribute('for', `edit-${inputId}`);
        input.setAttribute('id', `edit-${inputId}`);
    }


    if (isRequired === true){
        input.setAttribute('required', "true");
    }
    if (minlength !== null) {
        input.setAttribute('minlength', `${minlength}`);
    }
    if (maxlength !== null) {
        input.setAttribute('maxlength', `${maxlength}`);
    }
    if (value !== null){
        input.setAttribute('value', `${value}`)
    }

    if (inputType === "radio") {
        containerDiv.appendChild(input);
        containerDiv.appendChild(label);
    }
    else{
        containerDiv.appendChild(label);
        containerDiv.appendChild(input); 
    }
    
    return containerDiv;
}

const createPriorityRadioInput = (type) => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('input-container');
    containerDiv.classList.add('priority');

    const spanTxt = document.createElement('span');
    spanTxt.setAttribute('for', 'task-priority');
    spanTxt.textContent = "Priority:";

    const optionLow =  createInput("Low", "radio", "priority", "low", false, null, null, "low", type);
    const optionMedium =  createInput("Medium", "radio", "priority", "medium", true, null, null, "medium", type);
    const optionHigh =  createInput("High", "radio", "priority", "high", false, null, null, "high", type);

    containerDiv.appendChild(spanTxt);
    containerDiv.appendChild(optionLow);
    containerDiv.appendChild(optionMedium);
    containerDiv.appendChild(optionHigh);

    return containerDiv;
}

const createTaskForm = (taskData = null) => {
    const taskTitle = createInput('Title:', 'text', 'task-title', 'task_title', true, "0", "30");
    const taskDescription = createInput('Description:', 'textarea', 'task-description', 'task_description', true, "0", "100");
    const taskDueDate = createInput('Due Date:', 'date', 'task-dueDate', 'task_dueDate', true);
    let taskPriority = createPriorityRadioInput('add');

    if (taskData !== null){
        taskPriority = createPriorityRadioInput('edit');
        taskTitle.childNodes[1].value = taskData[1].title;
        taskDescription.childNodes[1].value = taskData[1].description;
        taskDueDate.childNodes[1].value = taskData[1].dueDate;
        
        if (taskData[1].priority === "low"){
            taskPriority.childNodes[1].childNodes[0].checked = true;
        }
        else if (taskData[1].priority === "medium"){
            taskPriority.childNodes[2].childNodes[0].checked = true;
        }
        else if (taskData[1].priority === "high"){
            taskPriority.childNodes[3].childNodes[0].checked = true;
        }

    }
    
    return [taskTitle, taskDescription, taskDueDate, taskPriority];
}

const createProjectForm = () => {
    const projectTitle = createInput('Title:', 'text', 'project-title', 'project-title', true, "0", "30")
    return [projectTitle];
}

const createNotesForm = () => {
    const NoteTitle = createInput('Title:', 'text', 'note-title', 'note-title', true, "0", "30");
    const NoteDetails = createInput("Details:", 'textarea', 'note-detail', 'note-detail', true, "0", "300");

    return [NoteTitle, NoteDetails];
}


export {createTaskForm, createProjectForm, createNotesForm}