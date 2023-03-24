import React from 'react'
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Menu = () => {
    const {id} = useParams();
    //const [restro,setRestro]  = useState([]);
    const [menu,setMenu] = useState([]);
    
    
      useEffect(() => {
        	getData(id);
		      async function getData() {
                const response = await fetch("https://my-json-server.typicode.com/aditijais/mockjson/restaurants/" + id);
                const data = await response.json();
                //setRestro(data.name);
                setMenu(data.menu);
                console.log(data);
            }
	     }, [id]);
  return (
    <div>
      THIS IS DETAILED MENU {id}
          {menu && menu.map((data)=>{
            return (
            <p key={data.id}>{data.name}</p>
            )
          })}
    </div>
  )
}
