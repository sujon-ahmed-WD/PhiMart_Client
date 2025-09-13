import { useState } from "react";

const Employee = () => {
    const [employee,setEmployee]=useState([
        {name:'sujon',age:20},  // akna ami array object update korsi 
        {name:'ahmed',age:22}

    ]);
    const handleClick=()=>{
        setEmployee(
            employee.map((emp)=>(emp.name ==='sujon'?{...emp,age:25}:emp))
        )
    }
    return (
        <div>
            <ul>
                {employee.map((emp,index)=>(
                    <li key={index}>{emp.name}-{emp.age}</li>
                ))}
            </ul>
            <button onClick={handleClick} className="px-3 py-2 bg-green-400 text-white">Click to update age</button>
        </div>
    );
};

export default Employee;