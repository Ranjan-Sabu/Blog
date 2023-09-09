
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Newblog from './components/Newblog';
import Subblog from './components/Subblog';
import Navbar from './components/Navbar';
import {MyContext} from './context/Context';
import { useState } from 'react';




function App() {
  const [title, setTitle] = useState([]);
  return (
    <>
  
     
        <MyContext.Provider value={{ title, setTitle }}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/blogAdd" element={<Newblog />} />
            <Route path="/viewblog/:id" element={<Subblog />} />
          </Routes>
        </MyContext.Provider>
      
   
    </>
  );
}

export default App;
