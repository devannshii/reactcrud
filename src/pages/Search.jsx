import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [Name, setName]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/users/?name=${Name}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key,index)=>{
          return(
            
            <div key={key.id || index}>
              <h1> Name: {key.name}</h1>
              <h2> Branch : {key.branch} </h2>
              <h2> Email: {key.email} </h2>
              <h2> Contact no: {key.contact}</h2>
              </div>
            
          )
    })
    return(
        <>
        <center>
          <h1 style={{border:"2px solid red",width:"500px",padding:"20px"}}> Search Student Records</h1><br />
          Enter Name. : <input type="text" value={Name} 
         onChange={(e)=>{setName(e.target.value)}} />
          <button onClick={handleSubmit}>search</button>
          <hr size="5" color="green"/>
          { ans }    
          </center>

        </>
    )
}
export default Search;