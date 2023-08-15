import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

export function TaskCards({ task }) {
  const navigate = useNavigate();
  return (
    <div
     className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={()=>navigate(`/tasks/${task.id}`)}
    >
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
