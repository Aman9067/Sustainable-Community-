
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Location from './components/Location';
import Contact from './components/Contact';
import Home_page from './components/Home_page';
import Carbonfootprint from './components/Carbonfootprint';
import Login from './components/Login'
import Membership from "./components/Membership";


function App() {
  return (
    <div classname="">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
           
          <Route path="/" element={<Login/>} />
          <Route path="/Membership" element={<Membership/>} />
          <Route path="/home" element={<Home_page/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Carbonfootprint" element={<Carbonfootprint />} />


        </Routes> 
      </BrowserRouter>

     {/* <Membership/> */}

    </div>
  );
}

export default App;

