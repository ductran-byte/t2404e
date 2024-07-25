import { useEffect, useState } from "react";
import * as studentService from "../service/student";
import { useNavigate, useParams } from "react-router-dom";

function FormStudent() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const isAddMode = !id;

    const save = () => {
        const addStudent = async () => {
            await studentService.saveStudent(name, price, id, isAddMode, selectedImage); // Pass image
            return navigate("/students");
        };
        addStudent();
    };

    useEffect(() => {
        if (!isAddMode) {
            const getStudent = async () => {
                const std = await studentService.getStudentById(id);
                if (std) {
                    setPrice(std.price);
                    setName(std.name);
                    setSelectedImage(std.image); // Set existing image if editing
                }
            };
            getStudent();
        }
    }, []);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <>
            <input type="hidden" value={id} />
            <input
                type="text"
                placeholder="input your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="input your price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100px' }} />
            )}

            <button onClick={() => save()}>Save</button>
        </>
    );
}

export default FormStudent;
