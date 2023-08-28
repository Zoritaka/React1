import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import MyBook from './pages/MyBook';
import MyBand from './pages/MyBand';
import MyRecipe from './pages/MyRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/MyBook" element={<MyBook/>}></Route>
        <Route path="/MyBand" element={<MyBand/>}></Route>
        <Route path="/MyRecipe" element={<MyRecipe/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;