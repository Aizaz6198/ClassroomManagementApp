'use client'
import { useEffect, useState } from "react";
import { getAllStudents,deleteStudent } from "@/actions";

export default function ClassroomTable() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const fetchStudents = async () => {
            const students = await getAllStudents();
            setStudents(students);
        };
        fetchStudents();
    },[]);

    const handleDelete = async (studentId) => {
        await deleteStudent(studentId);
        const students = await getAllStudents();
        setStudents(students);
    };



  console.log(students);
    return (
        <div>
            
            <table className=" border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 md:p-2 p-1">Name</th>
                        <th className="border border-gray-300 md:p-2 p-1">ClassName</th>
                        <th className="border border-gray-300 md:p-2 p-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="bg-gray-50">
                            <td className="border border-gray-300 md:p-2 p-1">{student.name}</td>
                            {student.classroom &&
                            <td className="border border-gray-300 md:p-2 p-1">{student.classroom.name}</td>
                            }
                            {!student.classroom &&
                            <td className="border border-gray-300 md:p-2 p-1">-</td>
                            }

                            <td className="border border-gray-300 md:p-2 p-1">
                                <div className="flex flex-row gap-4">
                                    <button  className="md:p-2 p-1 text-white bg-blue-500 rounded-lg">Edit</button>
                                    <button onClick={
                                        ()=>handleDelete(student._id)
                                    } className="md:p-2 p-1 text-white bg-red-500 rounded-lg">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
