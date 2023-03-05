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
                    <>
                    <div className="restro--name">{data.name}</div>
                    <div>{
                      data.menu && data.menu.map((data1)=>{
                        return(
                        <div className="menu--list">
                        <ol>
                          {data1.name && <li>Item Name : {data1.name}</li>}
                          {data1.price && <li>Price : {data1.price}</li>}
                          {data1.description && <li>Description : {data1.description}</li>}
                        </ol>
                        
                        </div>
                        )
                      })
                      }
                    </div>
                    </>
                    )
                 })
                 
            
           }
      </div>
    );
}

export default Home;