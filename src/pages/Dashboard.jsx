import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
} from "../features/tasks/tasksSlice";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null); // To manage the editing task
  const [searchTerm, setSearchTerm] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      if (filter === "overdue") return new Date(task.dueDate) < new Date();
      return true;
    })
    .filter((task) => {
      if (!searchTerm) return true;
      const status = task.completed
        ? "completed"
        : task.dueDate < new Date()
        ? "overdue"
        : "pending";
      return status.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleEdit = (task) => {
    setEditingTask(task); // Set the task to be edited
  };

  const handleSaveEditedTask = (task) => {
    dispatch(editTask({ id: task.id, updates: task }));
    setEditingTask(null); // Close the edit form after saving
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <TaskForm
        onSave={(task) => dispatch(addTask(task))}
        task={editingTask}
        onSaveEdit={handleSaveEditedTask}
      />
      <FilterPanel onFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={(id) => dispatch(toggleTask(id))}
        onDelete={(id) => dispatch(deleteTask(id))}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Dashboard;
