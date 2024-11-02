import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { message } from "antd";
import { useNavigate } from "react-router-dom";




const Update=()=>{
 const [mydata, setMydata]=useState([]);
 const navigate= useNavigate();
 const loadData=()=>{
    let api="http://localhost:3000/users";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
 }
 useEffect(()=>{
  loadData();
}, []);

const myRecDel=(id)=>{
  let api=`http://localhost:3000/users/${id}`
  axios.delete(api).then((res)=>{
       message.error("Your record Succesfully deleted!!!");
      loadData();
  })
}
const myEdit=(id)=>{
   navigate(`/editrec/${id}`)
}
const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.name}</td>
        <td>{key.branch}</td>
        <td>{key.email}</td>
        <td>{key.contact}</td>
        <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={edit} width="30" height="30" /> 
                 </a>


                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={del} width="30" height="30" /> 
                 </a>
            </td>

      </tr>
      </>
    )
  })

  return(

  <>
  <center>
  <h1>Update Student Records</h1></center><br /><br />
  <Table style={{border:"5px solid black",padding:"30px",width:"100%",margin:"25px auto",textAlign:"center"}}>
 
    <thead style={{margin:""}}>
      <tr>
        <th>Name</th>
        <th>Branch</th>
        <th>E-mail</th>
        <th>Contact</th>
      </tr>
    </thead>
    
       {ans}
  </Table>
      
     </>
  )

}
 

export default Update;