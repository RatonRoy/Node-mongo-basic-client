import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/user" element={<AddUser></AddUser>} />
      </Routes>
    </main>
  );
}

export default App;
