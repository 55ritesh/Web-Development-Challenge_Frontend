import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick=()=>{
    localStorage.clear();
    navigate("/");
  }

 
  const [click,setClick] = useState("");
  const upload = (e) => {
      console.warn(e.target.files);
      
  }

  return (

    <>
     <h1>Home Page</h1>
      <div> 
        <h1> Upload file in React</h1>
        <input className="input" type="file" onChange={(e)=>this.upload(e)} name="img"/>
      
      </div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Home;
