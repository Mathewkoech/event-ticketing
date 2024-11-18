import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import EventDetails from './components/events/EventDetails';
import ErrorPage from './components/pages/ErrorPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Route>
    </Routes>
  </Router>
);

export default App;
