import logo from './logo.svg';
import './App.css';
import Homepage from './component/page/Homepage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
