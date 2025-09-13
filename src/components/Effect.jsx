 import { useEffect, useState } from 'react';
 
 let count=0;
 const Effect = () => {
    const[users,setUsers] =useState([]);
    const[depandancyA,setDepandancyA] =useState(0);
    useEffect(()=>{
        console.log("Effect occured",depandancyA)
        // setUsers(["John"]);
    },[depandancyA])
    return (
        <div>
            <h1>UserList{++count}</h1>
            <button onClick={()=>setDepandancyA(Math.random())} className='px-3 py-2 bg-blue-400 text-white'>Click me</button>
        </div>
    );
 };
 
 export default Effect;

/**
 * Side Effects
 * 1. Manually modify in dom 
 * 2. Store data in local Storage
 * 3.Call to fetch / save data
 */