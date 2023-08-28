import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;