import { useEffect, useState } from "react";
import { getTasksApi } from "../api/tasks.api";
import { TaskCards } from "./TaskCards";

export function TasksList() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const resp = await getTasksApi();
      console.log("pagina cargada");
      settasks(resp.data);
    }
    getTasks();
  }, []);

  <h1>Task List:</h1>
  return (
    <div className="grid grid-cols-3 gap-3">

      {tasks.map((task) => (
       <TaskCards key={task.id} task={task}/>
      ))}
    </div>
  );
}
