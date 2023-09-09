import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../context/Context';
import { MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

const Newblog = () => {
  const { title, setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const [blog, setBlog] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    const title1 = event.target.title.value;
    console.log(title1);

    const blog1 = event.target.blog.value;
    setTitle(s => s = [...title, { id: Date.now(), title: title1, blog: blog1 }]);
    console.log(title);
    console.log(blog);
    navigate("/");
  };

  return (
    <div className='add'>
      <form onSubmit={handleInputChange} className='form'>

        <input className='input' label='Text input' id='title' type='text' />
        <br />
        <br />
        <textarea className='text' label='Message' id='blog' rows={4} />

        <br />
        <br />

        <button className='me-1'>
          Add Blog
        </button>

        <button onClick={() => navigate('/')} className='me-1' >
          Cancel
        </button>
      </form>
      <h1></h1>
    </div>
  );
};

export default Newblog;