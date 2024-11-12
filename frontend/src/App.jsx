import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;