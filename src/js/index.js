import '../css/normalize.css';
import '../css/styles.css';
import {addProject as createProject} from "./projects.js";
import * as domManipulation from './domMethods.js';
import * as formMehthods from './formMethods.js';

const add = document.querySelector('.add-container');
const submitBtn = document.querySelector('.submit');
const modalContainer = document.querySelector('.modal-container');
const titleInput = document.querySelector('input');
const form = document.querySelector('form');
const closeModalBtn = document.querySelector('.close img');

add.addEventListener('click', () => {
    domManipulation.showModal(modalContainer);
})

closeModalBtn.addEventListener('click', () => {
    domManipulation.closeModal(modalContainer);
})

submitBtn.addEventListener('click', (e) => {
    if (form.checkValidity()){
        e.preventDefault(); 
        createProject(formMehthods.getInfoFromInput(titleInput));
        domManipulation.addProjectInSideBar(formMehthods.getInfoFromInput(titleInput));
        domManipulation.closeModal(modalContainer);
        formMehthods.resetInput(titleInput);
    }
})
