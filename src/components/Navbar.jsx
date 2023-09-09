import React, { useContext, useState } from 'react';
import { MyContext } from '../context/Context';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [showNavColor, setShowNavColor] = useState(false);

  const { title } = useContext(MyContext);
  console.warn(title);
  const ab = useNavigate()
  return (
    <div className='App' >
      <>
      <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><Link to='/blogAdd'>add</Link></li>
          
        </ul>
      </div>
    </nav>
    <div className='fact'>
    <div className='fact2'>
        <h3>Fact about Lorem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci odit iure, eaque dolorem voluptatem mollitia dolor dolores est ipsa consectetur! Exercitationem laboriosam, quibusdam ut expedita minus laudantium hic perspiciatis?</p>
        </div>
    </div>
       
      </>
      <br />
      <br />
      <button onClick={() => ab('/blogAdd')} type="button" className='addbtn me-1'>ADD BLOG</button>
      <br />
      <br />
      <div className='bgn'> {title.map((t) =>
        < button className='txt' onClick={() => ab(`/viewblog/${t.id}`)}><h3 key={t.id} className='txt'>{t.title}</h3></button>)}</div>
    </div>
  );
};

export default Navbar;
