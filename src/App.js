import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import MyBook from './pages/MyBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/MyBook" element={<MyBook/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;