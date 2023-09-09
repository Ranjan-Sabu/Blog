import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Subblog = () => {
  const { title } = useContext(MyContext);
  const ab = useNavigate()
  const { id } = useParams()
  const asd = title.filter(h => h.id == id)
  return (
    <div className='App' >
      <div className='abc'>
        <h2 className='bgn'>{asd[0].title}</h2>
        <br />
        <h6 className='bgn'>{asd[0].blog}</h6>
        <br />
        <button onClick={() => ab('/')} color='info'>
          Back To Home
        </button>
      </div>
    </div>
  )
}

export default Subblog