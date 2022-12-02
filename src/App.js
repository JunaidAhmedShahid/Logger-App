import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggerManager from "./Modules/logger/LoggerManager";
import PageNotFound from "./components/Shared/PageNotFound";
import Dashboard from "./Modules/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/administration/logger" element={<LoggerManager />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
