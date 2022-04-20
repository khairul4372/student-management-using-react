import React from "react";

export default function Form(props) {
  const {
    studentName,
    setStudentName,
    studentList,
    setStudentList,
    editMode,
    editableStudent,
    setEditableStudent,
    setEditMode,
  } = props;

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      id: Date.now(),
      name: studentName,
    };
    setStudentList([...studentList, student]);
    setStudentName("");
  };
  const updateStudent = (e) => {
    e.preventDefault();
    const result = studentList.map((student) => {
      if (student.id === editableStudent.id) {
        student.name = studentName;
      }
      return student;
    });
    setStudentList(result);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter the student name"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
        <button onClick={(e) => (editMode ? updateStudent(e) : addStudent(e))}>
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </>
  );
}
