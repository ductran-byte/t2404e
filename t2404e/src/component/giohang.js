import { useEffect, useState } from "react";
import * as studentService from "../service/giohang"
import "../css/giohang.css";
import { Link } from "react-router-dom";

function ListStudent() {
    const [students, setStudents] = useState([]);
    useEffect(()=> {
        const getAll = async () => {
            const result = await studentService.getAllGioHang();
            setStudents(result);
        }
        getAll();
    }, []);

    const deleteStd = async(id) => {
        const stds = await studentService.deleteGioHang(id);
        setStudents(stds);
    }

    return (
        <>
            <table style={{width:700}} border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Soluong</th>
                    <th>Gia</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map(item => (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.quantity}</th>
                        <th>{item.price}</th>
                        <th>
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