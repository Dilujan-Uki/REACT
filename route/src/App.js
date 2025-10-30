
// import './App.css';
// import Home from './components/day1/Home';
// import AboutUS from './components/day1/AboutUs';
// import ContactUs from  './components/ContactUs';
import Home1 from "./components/day2/Home1";
import About1 from "./components/day2/About1"
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom"
function App() {
  return (
  <>
  {/* <BrowserRouter>
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
   
  */}

  <BrowserRouter>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
       </nav>

         <Routes>
            <Route path="/" element={<Home1></Home1>}></Route>
            <Route path="/about" element={<About1></About1>}></Route>
        </Routes>
  </BrowserRouter>
   
  </>

  );
}

export default App;
