import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

 

const Paly_with_Button = () => {
    // const handleClick=()=>console.log('this is button');
    const [alertvisible,setalertvisble]=useState(false)
    return (
        <div>
            { alertvisible &&( <Alert color="info" onClose={()=>setalertvisble(false)}> hello </Alert>)}
            <Button handleClick={()=>setalertvisble(true)}>Click me</Button>
        </div>
    );
};

export default Paly_with_Button;