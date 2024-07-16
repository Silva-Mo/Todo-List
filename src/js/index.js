import '../css/normalize.css';
import '../css/styles.css';
import {addProject as createProject} from "./projects.js";

const add = document.querySelector('.add-container');

add.addEventListener('click', () => {
    createProject("project1");
})
