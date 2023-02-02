import { useState,useEffect } from "react";
function Home(){
    
    const [restro,setRestro]  = useState([]);
    
    async function getData() {
        const response = await fetch("https://my-json-server.typicode.com/aditijais/mockjson/restaurants");
        const data = await response.json();
        setRestro(data);
        console.log(data);
    }
        useEffect(() => {
        	getData();
		    
	     }, [restro]);
    
    return(
      <div>{
        
                 restro.map((data)=>{
                    <div>{data[0].name}</div>
                 })
               
            
           }
      </div>
    );
}

export default Home;