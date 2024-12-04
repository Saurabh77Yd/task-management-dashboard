import { useState, useEffect } from "react";

const TaskForm = ({ onSave, task, onSaveEdit }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    ...task, // Merge the passed task if available
  });

  useEffect(() => {
    if (task) {
      setTaskData(task); // Update state if a valid task is passed (e.g., for editing)
    }
  }, [task]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.id) {
      onSaveEdit(taskData); // Edit the task
    } else {
      onSave({ ...taskData, id: Date.now(), completed: false }); // Add new task
    }
    setTaskData({ title: "", description: "", dueDate: "" }); // Reset form after save
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={taskData.title || ""} // Fallback to empty string if title is undefined
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={taskData.description || ""} // Fallback to empty string if description is undefined
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="dueDate"
        type="date"
        value={taskData.dueDate || ""} // Fallback to empty string if dueDate is undefined
        onChange={handleChange}
        required
      />
      <button type="submit">
        {taskData.id ? "Save Changes" : "Save Task"}
      </button>
    </form>
  );
};

export default TaskForm;
