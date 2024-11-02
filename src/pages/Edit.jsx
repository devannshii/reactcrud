import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";
import img from "../assets/girl.jpg"
const Edit=()=>{
    const {myid} =useParams();
    const [MyData, setMyData]=useState({}); // mydata={}
    const loadData=()=>{
      let api=`http://localhost:3000/users/${myid}`;
      axios.get(api).then((res)=>{
        console.log(res.data);
        setMyData(res.data);
      })
    }
    useEffect(()=>{
        loadData();
    }, []);
    const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setMyData(values=>({...values, [name]:value}))
          console.log(MyData);
    }
   const handleSubmit=(e)=>{ 
      e.preventDefault();
    let api=`http://localhost:3000/users/${myid}`;
    axios.put(api, MyData).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMyData({
            
            name:"",
            branch:"",
            email:"",
            contact:"",

        })
    })
   }
   const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover', // Makes the image cover the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Sets the height to the full viewport height
    width: '100%', // Sets the width to 100%
  };
    return(
        <>
        <div style={backgroundStyle} > 
          {/* <img  style={{height:"800px",width:"100%"}}src={img} alt="person holding lap" /> */}
        
        <div style={{marginLeft:"900px",padding:"50px"}}>
        <h1 style={{border:"2px solid red",width:"500px",padding:"20px",backgroundColor:"red",color:"white"}}> Edit Student Records :</h1><br />
        <div style={{border:"5px solid white",width:"500px",height:"350px",padding:"50px"}}>
        <form>
          <center>
          Name <input type="text" name="name" 
         value={MyData.name} onChange={handleInput} />
         <br/><br />
          Branch <input type="text" name="branch" 
         value={MyData.branch} onChange={handleInput} />
         <br/><br />
         Email <input type="text" name="email" 
         value={MyData.email}  onChange={handleInput}/>
         <br/><br />
         Contact <input type="text" name="contact" 
         value={MyData.contact} onChange={handleInput} />
         <br/><br />
         <button onClick={handleSubmit}>Update!</button>
         </center>
         </form>
         </div>
         </div>
         
         
         
         </div>
         
        </>
    )
}
export default Edit;