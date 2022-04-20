import React from "react";

export default function AllSudent(props) {
  const {
    studentList,
    setStudentList,
    setEditMode,
    setStudentName,
    setEditableStudent,
    presentStudentHandler,
    absentStudentHandler,
  } = props;

  const deleteStudent = (id) => {
    const filteredStudent = studentList.filter((student) => student.id != id);
    setStudentList(filteredStudent);
  };

  const editStudent = (id) => {
    const filteredStudent = studentList.find((student) => student.id == id);
    setEditableStudent(filteredStudent);
    setStudentName(filteredStudent.name);
    setEditMode(true);
  };

  return (
    <div
      style={{
        minWidth: "300px",
        minHeight: "100px",
        border: "1px solid green",
        margin: "10px",
      }}
    >
      {studentList.map((student) => {
        return (
          <p key={student.id}>
            {student.name}
            <button onClick={() => editStudent(student.id)}>Update</button>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <button onClick={() => presentStudentHandler(student.id)}>
              Present
            </button>
            <button onClick={() => absentStudentHandler(student.id)}>
              Absent
            </button>
          </p>
        );
      })}
    </div>
  );
}
