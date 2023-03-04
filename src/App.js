
import './App.css';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
