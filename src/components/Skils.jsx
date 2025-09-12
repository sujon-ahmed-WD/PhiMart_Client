import { useState } from "react";

const Skills = () => {
    const[skills,setSkills]=useState(["python","javascript"])

    const handleSkills=()=>{
        // Add
        // setSkills([...skills,"React"])
        // Remove
        // setSkills(skills.filter((item) => item!='python'));
        setSkills(
            skills.map((item)=>(item =='javascript' || 'python' ? (item="React"):item))
        )

    }
    return (
        <div>
            <ul className="m-5 list-disc">
                {skills.map((skill)=>(
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <button onClick={handleSkills} className="bg-green-500 ">Update Skill</button>
        </div>
    );
};

export default Skills;