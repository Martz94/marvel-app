import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Series from './pages/Series'
import Characters from './pages/Characters'
import Comics from './pages/Comics'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/series" element={<Series />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
