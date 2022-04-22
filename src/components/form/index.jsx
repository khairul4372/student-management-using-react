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
    fetchData,
  } = props;

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      id: Date.now(),
      name: studentName,
    };
    //setStudentList([...studentList, student]);
    fetch("http://localhost:3000/studentManagement", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      fetchData();
      setStudentName("");
    });
  };
  const updateStudent = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/studentManagement/${editableStudent.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: studentName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      fetchData();
      setEditMode(false);
      setEditableStudent(null);
      setStudentName("");
    });

    /* const result = studentList.map((student) => {
      if (student.id === editableStudent.id) {
        student.name = studentName;
      }
      return student;
    }); 
    setStudentList(result);
    
    setStudentName(""); */
  };

  return (
    <>
      <form action="" className="w-1/2 m-auto space-x-4 ">
        <input
          className="text-xl text-black-400  border px-2 py-1 rounded-sm ring-2"
          type="text"
          placeholder="Enter the student name"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
        <button
          className="ring-2 px-2 py-1 rounded-sm text-xl bg-sky-200"
          onClick={(e) => (editMode ? updateStudent(e) : addStudent(e))}
        >
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </>
  );
}
