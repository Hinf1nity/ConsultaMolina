import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WorkInProgress from "./pages/WorkInProgress";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <div className="App"> */}
        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/work-in-progress" replace />}
          />
          <Route path="/work-in-progress" element={<WorkInProgress />} />
          <Route
            path="*"
            element={<Navigate to="/work-in-progress" replace />}
          />
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/quienes-somos" element={<HomePage />} />
          <Route path="/mision-vision" element={<HomePage />} />
          <Route path="/valores" element={<HomePage />} />
          <Route path="/profesionales" element={<HomePage />} />
          <Route path="/ubicacion-contacto" element={<HomePage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
