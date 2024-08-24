import { useState, useEffect } from 'react';
import Signup from './pages/Signup'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import First from './pages/First';
import SchoolDetails from './pages/SchoolDetails';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<First/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/schoolDetails" element={<SchoolDetails/>}/>
        <Route path="/home" element={<Home/>} ></Route>
      </Routes>

    </Router>
    
  );
}

export default App;
