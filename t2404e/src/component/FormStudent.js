import { useEffect, useState } from "react";
import * as studentService from "../service/student"
import { useNavigate, useParams } from "react-router-dom";

function FormStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(18);
    const navigate = useNavigate();
    const {id} = useParams();
    const isAddMode = !id;

    const save = () => {
        const addStudent = async () => {
            await studentService.saveStudent(name, age,id, isAddMode);
            return navigate("/students");
        }
        addStudent();
    }

    useEffect(()=>{
        if (!isAddMode) {
            const getStudent = async () => {
                const std = await studentService.getStudentById(id);
                if (std) {
                    setAge(std.age);
                    setName(std.name);
                }
            }
            getStudent();
        }
    }, [])


    return (
        <>
            <input type="hidden" value={id} />
            <input type="text" placeholder="input your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="input your age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={()=>save()}>Save</button>
        </>

    );
}

export default FormStudent;