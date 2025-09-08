import { useState } from "react";

// eslint-disable-next-line react/prop-types
const List = ({items=[],heading}) => {
    const [selectdIndex,setselectdIndex] = useState(-1);
    return (
        <div>
            <h1 className="text-2xl font-bold">{heading}</h1>
            <ol>
                {items.map((fruit,Index)=>{
                return (
                <li
                 className={
                    selectdIndex===Index ? 'bg-blue-400':""
                 }
                
                    onClick={()=>setselectdIndex(Index)}
                     key={fruit}>{fruit}</li>

                ) 
            })}
            </ol>
           
        </div>
    );
};

export default List;