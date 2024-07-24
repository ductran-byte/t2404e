import {db} from "./dexie";

const saveStudent = async (name, age, id, isAddMode) => {
    if (isAddMode) {
        db.student.add({name:name, age:age});
    } else {
        db.student.update(parseInt(id), {name:name, age:age});
    }
}


const getAllStudent = async () => {
    return await db.student.toArray();
}

const deleteStudent = async (id) => {
    db.student.delete(parseInt(id));
    return await db.student.toArray();
}
 
const getStudentById = async (id) => {
    return await db.student.get(parseInt(id));
}
export {saveStudent,getAllStudent,getStudentById,deleteStudent}

