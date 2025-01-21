import { resetInput } from "./formMethods";

const createInput = (labelTxt ,inputType, inputName, inputId, isRequired, minlength = null, maxlength = null, value = null) => {
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

const createPriorityRadioInput = () => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('input-container');
    containerDiv.classList.add('priority');

    const spanTxt = document.createElement('span');
    spanTxt.setAttribute('for', 'task-priority');
    spanTxt.textContent = "Priority:";

    const optionLow =  createInput("Low", "radio", "priority", "low", false, null, null, "low");
    const optionMedium =  createInput("Medium", "radio", "priority", "medium", true, null, null, "medium");
    const optionHigh =  createInput("High", "radio", "priority", "high", false, null, null, "high");

    containerDiv.appendChild(spanTxt);
    containerDiv.appendChild(optionLow);
    containerDiv.appendChild(optionMedium);
    containerDiv.appendChild(optionHigh);

    return containerDiv;
}

const createTaskForm = () => {
    const taskTitle = createInput('Title:', 'text', 'task-title', 'task-title', true, "0", "25");
    const taskDescription = createInput('Description:', 'textarea', 'task-description', 'task-description', true, "0", "50");
    const taskDueDate = createInput('Due Date:', 'date', 'task-dueDate', 'task-dueDate', true);
    const taskPriority = createPriorityRadioInput();

    return [taskTitle, taskDescription, taskDueDate, taskPriority];
}

const createProjectForm = () => {
    const projectTitle = createInput('Title:', 'text', 'project-title', 'project-title', true, "0", "20")
    return [projectTitle];
}


export {createTaskForm, createProjectForm}