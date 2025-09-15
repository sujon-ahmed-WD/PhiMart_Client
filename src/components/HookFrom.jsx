import { useForm } from "react-hook-form";

const HookFrom = () => {
// const PersonObj={name:"",age:0};
const {register,handleSubmit,formState:{errors}} = useForm();
// console.log(handleSubmit)
console.log(errors)
const onSubmit=(data)=>{
    console.log(data)
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="mb-3">
                    <label 
                    className="block text-gray-700 font-bold mb-2"
        
                    htmlFor="name">Name :</label>
                    <input type="text" 
                    id="name"
                    {...register("name",{ required : true ,minLength:5 })}
                    className="w-full px-3 py-2 border border-gray-300
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500
                    rounded-md
                    " />
                    {errors.name?.type=='required' && <span>This field is required</span>}
                    {errors.name?.type=='minLength' && <span>Minimum length is 5</span>}
                </div>
                <div className="mb-3">
                    <label
                     className="block text-gray-700 font-bold mb-2"
                      htmlFor="age">Age :</label>
                    <input type="number"
                    {...register("age",{required:true,min:18})}
                    id="age"
                    className="w-full px-3 py-2 border border-gray-300
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500
                    rounded-md
                    " />
                    {errors.age?.type=='required' && <span>This field is required</span>}
                    {errors.age?.type=='min' && <span>Minimum age is 18</span>}
                </div>
                <button className=" text- px-3 py-2 text-white bg-blue-500 rounded-md ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HookFrom ;