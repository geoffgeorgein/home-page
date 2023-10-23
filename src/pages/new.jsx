import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import "./new.scss";
import { DesktopOutlined } from "@ant-design/icons";


const New = () => {

    const [content,setcontent]=useState([]);

    const getFile=()=>{
        fetch("http://localhost:5000/upload", {
        method: "GET",
      
    })
      .then((res) => {
        res.json().then((data) =>{
            console.log("daa",data);
            data.replace('"','');
            // console.log("daa",data);
            data=data.split('\\r').join();
            // console.log("da1",data);
            data=data.split('\\n').join();
            data.replace(',,','');
            data=data.split(',,,,');
           
            setcontent(data);
        //     console.log("c",content);
        // })
        // console.log("res",res.data)
      })
        
      
    })
    }

    useEffect(() => {

        getFile()

    },[])

  return (
    <div className="newcontainer">

        <Navbar/>

        {
            content.map((ele)=>{

                return (
                    <>
                        <div className="Container-1">
                        <DesktopOutlined />
                        <p>{ele}</p>
                        </div>
                    </>

                )
                
            })
        }

        
    </div>
  )
}

export default New