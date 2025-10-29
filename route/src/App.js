
import './App.css';
import Home from './components/Home';
import AboutUS from './components/AboutUs';
import ContactUs from  './components/ContactUs';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom"
function App() {
  return (
  <>
  <BrowserRouter>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/about'>AboutUs</Link>
         <Link to='/contact'>ContactUs</Link>
       </nav>

         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutUS></AboutUS>}></Route>
            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
  </BrowserRouter>
   
 
  </>

  );
}

export default App;
