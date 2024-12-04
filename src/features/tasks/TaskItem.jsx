const TaskItem = ({ task, onToggle, onDelete, onEdit }) => (
  <div className={task.completed ? "completed" : ""}>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Due: {task.dueDate}</p>
    <button onClick={() => onToggle(task.id)}>
      {task.completed ? "Undo" : "Complete"}
    </button>
    <button onClick={() => onDelete(task.id)}>Delete</button>
    <button onClick={() => onEdit(task)}>Edit</button>
  </div>
);

export default TaskItem;
