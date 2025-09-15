import { useRef } from "react";

const From = () => {
    const nameRef=useRef(null)
    const ageRef=useRef(null)

    const person= {name:" ",age:0};
    const handeleSubmit =(event)=>{
        event.preventDefault();
       if(nameRef.current!=null) person.name=nameRef.current.value;
       if(ageRef.current!=null) person.age=parseInt(ageRef.current.value)
        console.log(person)
    };

    

    return (
        <div>
            <form onSubmit={handeleSubmit} action="">
                <div className="mb-3">
                    <label 
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name">Name :</label>
                    <input type="text" 
                    id="name"
                    ref={nameRef}
                    className="w-full px-3 py-2 border border-gray-300
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500
                    rounded-md
                    " />
                </div>
                <div className="mb-3">
                    <label
                     className="block text-gray-700 font-bold mb-2"
                      htmlFor="age">Age :</label>
                    <input type="number"
                    id="age"
                    ref={ageRef}
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

export default From;