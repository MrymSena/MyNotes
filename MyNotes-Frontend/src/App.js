import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NotePage from "./pages/NotePage";
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div className="App background">
            <Routes>
              <Route path="/" element={<NotePage />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
