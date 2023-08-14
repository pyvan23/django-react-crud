import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { FormPage } from "./pages/FormPage";
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
