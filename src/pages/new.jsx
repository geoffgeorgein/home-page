import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import "./new.scss";


const New = () => {

    const [content,setcontent]=useState("");

    const getFile=()=>{
        fetch("http://localhost:5000/upload", {
        method: "GET",
      
    })
      .then((res) => {
        res.json().then((data) =>{
            data=data.slice(0,-5)
            setcontent(data);
            console.log("da",data);
            console.log("c",content);
        })
        // console.log("res",res.data)
      })
        
      
    }

    useEffect(() => {

        getFile();

    },[])

  return (
    <div className="newcontainer">

        <Navbar/>
        
        <p>{content}</p>
    </div>
  )
}

export default New