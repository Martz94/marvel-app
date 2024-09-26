import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Movies from './Pages/Movies'
import Characters from './Pages/Characters'
import Comics from './Pages/Comics'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
