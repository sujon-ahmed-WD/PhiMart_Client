import { useState } from "react";

const FromState = () => {
const PersonObj={name:"",age:0};
const [person,setPerson]=useState(PersonObj)


    const handeleSubmit =(event)=>{
        event.preventDefault();
        console.log(person)
    };
    return (
        <div>
            <form onSubmit={handeleSubmit} action="">
                <div className="mb-3">
                    <label 
                    className="block text-gray-700 font-bold mb-2"
                    value={person.name}
                    htmlFor="name">Name :</label>
                    <input type="text" 
                    onChange={(event)=>setPerson({...person,name:event.target.value})}
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500
                    rounded-md
                    " />
                </div>
                <div className="mb-3">
                    <label
                    value={person.age}
                     className="block text-gray-700 font-bold mb-2"
                      htmlFor="age">Age :</label>
                    <input type="number"
                    onChange={(event)=>setPerson({...person,age:event.target.value})}

                    id="age"
                    className="w-full px-3 py-2 border border-gray-300
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500
                    rounded-md
                    " />
                </div>
                <button className=" text- px-3 py-2 text-white bg-blue-500 rounded-md ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FromState ;