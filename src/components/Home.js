import { useState,useEffect } from "react";
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
                    return(
                    <div>{data.name}</div>
                    )
                 })
               
            
           }
      </div>
    );
}

export default Home;