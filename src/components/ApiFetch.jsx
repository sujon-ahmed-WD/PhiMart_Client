import axios from "axios";
import { useEffect, useState } from "react";

const ApiFetch = () => {
    const[users,setUsers]=useState([]);
    const[error,setError]=useState("");

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>res.json())
    //     .then((data)=>setUsers(data))
    // },[]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) =>setUsers(data.data))
        .catch((err)=>setError(err.message));
    })
    return (
        <div>
            {error && <p className="text-red-400">{error}</p>}
            <ul>{users.map((user,index)=>(
                <li className="bg-red-500" key={index}>{user.name}
                <p className="bg-green-300">{user.email}</p>
                </li>
            ))}</ul>
        </div>
    );
};

export default ApiFetch;