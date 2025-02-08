const dataOfFormSubmitted = () => {
    const objOfData = {};

    const currentFormInputs = document.querySelectorAll('form input');
    const currentFormTextareas = document.querySelectorAll('form textarea')

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
    if (input.getAttribute('name', 'priority')){
        input.checked = false;
    }
    input.value = "";
    
}

export {resetInput, dataOfFormSubmitted};