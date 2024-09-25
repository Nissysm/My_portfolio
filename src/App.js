import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/portfolio' element={<Portfolio/>}/>

        <Route path='/skills' element={<Skills/>}/>

        
       </Routes>






      
    </div>
  );
}

export default App;
