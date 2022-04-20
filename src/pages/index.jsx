import React, { useState } from "react";
import DisplayStudent from "../components/displayStudent";
import Form from "../components/form";

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <>
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <DisplayStudent
        studentList={studentList}
        setStudentList={setStudentList}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
        setEditableStudent={setEditableStudent}
      />
    </>
  );
}
