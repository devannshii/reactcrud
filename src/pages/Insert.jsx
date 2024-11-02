import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../assets/insert.webp';

const Insert = () => {
  const [input, setInput] = useState({});

  // Handle input field changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({
      ...values,
      [name]: value
    }));
    console.log(input);
  };

  // Handle form submission
  const handleSubmit =  () => {
    let api = "http://localhost:3000/users";
    axios.post(api, input).then((res)=>{
        console.log(res);
        toast.success("Data Successfully Save!!!")
    })
   }
   const ImgBack = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover', // Makes the image cover the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Sets the height to the full viewport height
    width: '100%', // Sets the width to 100%
  };
    

  return (
    <>
    <center>
      <div style={ImgBack}>
      <div style={{border:"2px solid white",width:"500px",color:"blue",fontSize:"20px",backgroundColor:"white"}}>
      <h1 style={{border:"2px solid black",color:"blue",backgroundColor:"white",padding:"20px",marginTop:"20px"}}>Insert Record</h1><br /><br />
       Name: <input type="text" name="name" onChange={handleInput} />
      <br /><br />
       Branch: <input type="text" name="branch" onChange={handleInput} />
      <br /><br />
      Email: <input type="text" name="email" onChange={handleInput} />
      <br /><br />
      Contact: <input type="text" name="contact" onChange={handleInput} />
      <br /><br />
      <button onClick={handleSubmit}>Save!!!</button>
      <ToastContainer />
      </div>
      </div> 
      </center>
    </>
  );
};

export default Insert;
