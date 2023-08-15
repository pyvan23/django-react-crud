import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Nav } from "./components/Nav";
import { TasksPage } from "./pages/tasksPage";
import { FormPage } from "./pages/formPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<FormPage />} />
        <Route path="/tasks-create" element={<FormPage />} />
      </Routes>
      <Toaster />
      </div>
    </BrowserRouter>
  );
}
export default App;
