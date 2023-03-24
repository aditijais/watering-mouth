import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
function Home(){
    
    const [restro,setRestro]  = useState([]);
    
    
        useEffect(() => {
        	getData();
		    async function getData() {
                const response = await fetch("https://my-json-server.typicode.com/aditijais/mockjson/restaurants");
                const data = await response.json();
                setRestro(data);
                console.log(data);
            }
	     }, []);
    
    return(
      <div>{
        
                 restro.map((data)=>{
                  let url = `/${data.id}`
                    return(
                    <>
                    
                    <Link to= {url}>
                    <div key={data.id} className="restro--name">{data.name}</div>
                    </Link>
                    </>
                    )
                 })
                 
            
           }
      </div>
    );
}

export default Home;