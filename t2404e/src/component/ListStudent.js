import { useEffect, useState } from "react";
import * as studentService from "../service/student"
import { Link } from "react-router-dom";

function ListStudent() {
    const [students, setStudents] = useState([]);
    useEffect(()=> {
        const getAll = async () => {
            const result = await studentService.getAllStudent();
            setStudents(result);
        }
        getAll();
    }, []);

    const deleteStd = async(id) => {
        const stds = await studentService.deleteStudent(id);
        setStudents(stds);
    }

    return (
        <>
            <button><Link to={"/student/form"}>Add new Student</Link></button>
            <table style={{width:700}} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.age}</th>
                            <th>
                                <Link to={"/student/form/"+item.id}>Edit</Link> 
                                || 
                                <button onClick={() => deleteStd(item.id)}>Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListStudent;