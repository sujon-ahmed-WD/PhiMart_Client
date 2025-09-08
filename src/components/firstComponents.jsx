const FirstComponents  =  () => {
    const name="Phitron"
    const sum=(a,b)=>a+b;
    return(
        <>
        <h1 className="text-xl text-red-500">Hello{name || "Sujon" }</h1>
        <p>Your sum is {sum(10,5)}</p>
         
        </>
    );

};
export default FirstComponents;