import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DataPage from './dataPage'
import WelcomePage from './welcomePage';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dataPage" element={<DataPage />} />
      </Routes>
    </Router>
  );
}

export default App

