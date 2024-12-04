import TaskItem from "../features/tasks/TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default TaskList;
