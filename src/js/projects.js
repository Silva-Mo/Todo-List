const projects = [];

function project(name) {
    const todos = [];
    return {name, todos};
}

const addProject = (name) => {
    const projectVar = project(name);
    projects.push(projectVar);
    console.log(projects);
}

export {addProject};