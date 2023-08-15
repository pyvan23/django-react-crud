import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export function getTasksApi() {
  return taskApi.get("/");
}
export function createTasksApi(task) {
  return taskApi.post("/",task);
}
export function deleteTasksApi(id) {
  return taskApi.delete(`/${id}`,);
}
export function getTask(id) {
  return taskApi.get(`/${id}/`,);
}
export function editTasksApi(id,task) {
  return taskApi.put(`/${id}/`,task);
}
