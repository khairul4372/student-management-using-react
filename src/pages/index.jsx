import React, { useEffect, useState } from "react";
import DisplayStudent from "../components/displayStudent";
import Form from "../components/form";

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:3000/studentManagement")
      .then((res) => res.json())
      .then((data) => setStudentList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-fit min-h-1/2 m-auto mt-5 p-4 border-2 border-gray-400 rounded-md border-double">
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        fetchData={fetchData}
      />
      <DisplayStudent
        studentList={studentList}
        setStudentList={setStudentList}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
        setEditableStudent={setEditableStudent}
        fetchData={fetchData}
      />
    </div>
  );
}
