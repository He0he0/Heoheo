import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ExperiencePage from "./Experience";
import ProjectsPage from "./Projects";
import HomePage from "./Home";
import NavBar from "./NavBar";
import "./App.css"

function App() {
  return (
    <>
    <div className="class-container">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Router>
        <footer className="footer">
          © {new Date().getFullYear()} Dylan Truong. All rights reserved.
        </footer>
     </div>
    </div>

    </>
    
  );
}

export default App;
