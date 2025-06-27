import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import { Footer } from "./components";
import { Contact, Home } from "./pages";
import { github, linkedin } from "../src/assets/icons";
import gmailIcon from "../src/assets/images/gmail.png";

const App = () => {
  return (
    <main style={{ background: "black" }}>
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

const AppContent = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Social Links Header */}
      <header className="fixed top-0 right-0 z-50 p-4 sm:p-6">
        <nav className="flex text-lg gap-4 sm:gap-7 font-medium">
          <a
            href="https://github.com/adityabhadauria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white transition-colors hover:text-white hover:bg-[linear-gradient(to_right,_#111111,_#1a1a1a)] px-2 py-1 rounded"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-bhadauria-016a771b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white transition-colors hover:text-white hover:bg-[linear-gradient(to_right,_#111111,_#1a1a1a)] px-2 py-1 rounded"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 text-white transition-colors hover:text-white hover:bg-[linear-gradient(to_right,_#111111,_#1a1a1a)] px-2 py-1 rounded bg-transparent border-none cursor-pointer"
          >
            <img src={gmailIcon} alt="Gmail" className="w-6 h-6" />
            <span className="hidden sm:inline">Gmail</span>
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
