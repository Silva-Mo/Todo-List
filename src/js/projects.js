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

export {addProject};