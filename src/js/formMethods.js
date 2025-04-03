const dataOfFormSubmitted = (form) => {
    const objOfData = {};

    const currentFormInputs = document.querySelectorAll(`#${form.getAttribute('id')} input`);
    const currentFormTextareas = document.querySelectorAll(`#${form.getAttribute('id')} textarea`)

    currentFormInputs.forEach((input) => {
        if (input.getAttribute("type") === "radio"){
            if (input.checked === true){
                objOfData.priority = input.value;
            }
            else if (input.checked === false) {
                return;
            }
        }
        else{
            objOfData[`${input.getAttribute("id")}`] = input.value;  
        }
    })

    currentFormTextareas.forEach((textarea) => {
        objOfData[`${textarea.getAttribute("id")}`] = textarea.value; 
    })

    console.log(objOfData);
    return objOfData;
}


const resetInput = (input) => {
    if (input.getAttribute('name') === "priority"){
        input.checked = false;
    }
    else {
        input.value = "";  
    }
}

export {resetInput, dataOfFormSubmitted};