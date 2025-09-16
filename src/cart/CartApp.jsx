import { Trash2 } from "lucide-react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";

const CartApp = () => {
    const{register,handleSubmit,formState:{errors}}= useForm();
    const[cart,setCart]=useState([])

    const addItem =(data)=>{
        const existingItem=cart.find((item)=>item.name===data.name);

        if (existingItem)
        {
            setCart(
                cart.map((item)=>item.name===data.name?{...item,quantity:item.quantity + 1}: item )
            )
        }
        else{
            setCart([...cart,{name:data.name,price:parseFloat(data.price),quantity:1}])

        }
    }

    return (
        <div className="w-2/3 mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
            {/* Add Cart Item */}
            <form onSubmit={handleSubmit(addItem)} className="mb-4 space-y-4">
            <input type="text"
            {...register("name",{required:true})}
            
             placeholder="item name" 
             className="border p-2 rounded w-full"
             />
             {errors.name?.type=='required' && <span>This field is required</span>}
            <input type="number"
            {...register("price",{required:true})}
             placeholder="item price" 
             className="border p-2 rounded w-full" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Add Item</button>
            </form>
            {/* Cart items List */}
            {cart.length >0 ? (
                // Todo Cart items
                <div>{
                    cart.map((item,index)=>(
                        <div key={index} className="flex justify-between items-center bg-white rounded mb-2 p-2">
                            <p>{item.name}</p>
                            <p>{(item.price*item.quantity).toFixed(2)}</p>

                            <div className="flex items-center">
                                <button className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button className="bg-green-500 text-white px-2 py-1 rounded" >+</button>

                                <button className="mx-2">
                                    <Trash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* TOTAL SECTION */}
                    <div className="mt-4  font-bold text-lg">Total : 100</div>
                    </div>
                    
                    
                    // Total Price 
                    
            ):(
                <p>no card item</p>
            )}
        </div>
         
    );
};

export default CartApp;