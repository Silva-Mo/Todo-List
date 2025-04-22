import * as projectStuff from "./projects";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
  
const populateStorage = () => {
  localStorage.setItem("HomeTodos", JSON.stringify(projectStuff.getProjectTodos(0)));
  localStorage.setItem("TodayTodos", JSON.stringify(projectStuff.getProjectTodos(1)));
  localStorage.setItem("WeekTodos", JSON.stringify(projectStuff.getProjectTodos(2)));
  localStorage.setItem("newProjects", JSON.stringify(projectStuff.getNewProjectsArray()));
}

const setStoredTodo = () => {
  const storedHomeTodos = JSON.parse(localStorage.getItem("HomeTodos"));
  const storedTodayTodos = JSON.parse(localStorage.getItem("TodayTodos"));
  const storedWeekTodos = JSON.parse(localStorage.getItem("WeekTodos"));
  const storedNewProjects = JSON.parse(localStorage.getItem("newProjects"));
  projectStuff.setSavedProjects(storedHomeTodos, storedTodayTodos, storedWeekTodos, storedNewProjects);
}

if (storageAvailable("localStorage")) {
  if (!localStorage.getItem("HomeTodos")) {
    populateStorage();
  } else {
    setStoredTodo();
  }
} 



export {populateStorage}