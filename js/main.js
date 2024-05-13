document.addEventListener("DOMContentLoaded", function () {
  const tasks = [
    {
      title: "Apprendre mon cours de JavaScript",
      priority: 1,
    },
    {
      title: "Créer mon compte Github",
      priority: 2,
    },
    {
      title: "Répondre à mes emails",
      priority: 3,
    },
  ];

  const taskList = document.getElementById("taskList");
  const taskForm = document.getElementById("taskForm");
  const deleteBtn = document.getElementById("deleteBtn");

  const displayTasks = () => {
    taskList.innerHTML = "";
    tasks.sort((a, b) => a.priority - b.priority);

    tasks.forEach((task) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const text = document.createTextNode(task.title);

      checkbox.type = "checkbox";
      label.appendChild(checkbox);
      label.appendChild(text);
      li.appendChild(label);

      switch (task.priority) {
        case 1:
          li.classList.add("high");
          break;
        case 2:
          li.classList.add("normal");
          break;
        case 3:
          li.classList.add("low");
          break;
      }

      taskList.appendChild(li);
    });
  };

  displayTasks();

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput").value;
    const prioritySelect = document.getElementById("prioritySelect").value;
    tasks.push({ title: taskInput, priority: parseInt(prioritySelect) });
    displayTasks();
  });

  deleteBtn.addEventListener("click", function () {
    const checksbox = document.querySelectorAll(
      '#taskList input[type="checkbox"]:checked'
    );
    checksbox.forEach((checkbox) => {
      const li = checkbox.parentNode.parentNode;
      const taskIndex = Array.from(li.parentNode.children).indexOf(li);
      tasks.splice(taskIndex, 1);
    });
    displayTasks();
  });
});
