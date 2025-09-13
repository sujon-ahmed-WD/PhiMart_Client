import axios from "axios";
import { useEffect, useState } from "react";

const ApiFetch = () => {
    const[users,setUsers]=useState([]);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>res.json())
    //     .then((data)=>setUsers(data))
    // },[]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) =>setUsers(data.data))
    })
    return (
        <div>
            <ul>{users.map((user,index)=>(
                <li className="bg-green-400" key={index}>{user.name}
                <p className="bg-blue-300">{user.email}</p>
                </li>
            ))}</ul>
        </div>
    );
};

export default ApiFetch;