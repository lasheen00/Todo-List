const tasks = [];

    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm";

        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        taskName.className = task.done ? "line-through text-gray-400" : "";

        const buttonGroup = document.createElement("div");
        buttonGroup.className = "space-x-2";

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        toggleBtn.className = "text-sm px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500";
        toggleBtn.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600";
        deleteBtn.onclick = () => deleteTask(index);

        buttonGroup.appendChild(toggleBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(taskName);
        li.appendChild(buttonGroup);
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const name = input.value.trim();

      if (name) {
        tasks.push({ name, done: false });
        input.value = "";
        renderTasks();
      }
    }

    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }