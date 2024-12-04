import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === Number(id))
  );

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TaskDetails;
