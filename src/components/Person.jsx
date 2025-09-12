import { useState } from "react";


const Person = () => {
    // const[firstName,setFirstName]=useState("")
    // const[lastName,setLastName]=useState("")
    const [person,setPerson]=useState({
        firstName: "sujon",
        lastName :"ahmed",
        email:"sujon@gmail.com",
        address:{
            city:"Mirpur",
            state:"Dhaka"
        }
    });

    const handleClick =()=>{
        const newPerson={
            ...person,
            address:{
                ...person.address,
                city:"Damra",
                state:"Bhola"
            },
        };
        setPerson(newPerson)
    }
    return (
        <div className="m-5">
            <h1>{person.firstName} {person.lastName} {person.email} </h1>
            <h1>{person.address.city} {person.address.state}</h1>
            <button onClick={handleClick} className="px-3 py-2 bg-blue-500 text-white rounded-sm">Click</button>
        </div>
    );
};

export default Person;