const taskList1 = document.getElementById("taskList");
console.log(taskList1);

taskList1.addEventListener("submit"),
  function (e) {
    e.preventDefault();

    const newTaskInputField = document.getElementById("newTask");
    const taskList2 = {
      newTask: newTaskInputField.value,
    };
    const createList = document.createElement("div");
    createList.classList.add(newList);

    createList.innerHTML = `
    <p>$(newTask.newTask)</p>
    <button onclick>"delete createList(event)">DELETE<button>`;

    const sectionList = document.getElementById("list");
    sectionList.appendChild(createList);
  };

console.log(taskList1);
