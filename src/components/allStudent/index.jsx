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
    fetchData,
  } = props;

  const deleteStudent = (id) => {
    /* const filteredStudent = studentList.filter((student) => student.id != id);
    setStudentList(filteredStudent); */
    fetch(`http://localhost:3000/studentManagement/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetchData();
    });
  };

  const editStudent = (id) => {
    const filteredStudent = studentList.find((student) => student.id == id);
    setEditableStudent(filteredStudent);
    setStudentName(filteredStudent.name);
    setEditMode(true);
  };

  return (
    <div className="ring-2 rounded-sm m-4 p-4 text-base space-y-2">
      <h2 className="text-xl">All Students</h2>
      <hr />
      {studentList.map((student) => {
        return (
          <div
            key={student.id}
            className=" flex justify-between space-x-2 box-border"
          >
            <p className="py-1">{student.name}</p>
            <div className=" flex space-x-2 ">
              <button
                className="border px-2 py-1 rounded bg-yellow-500 text-white"
                onClick={() => editStudent(student.id)}
              >
                Update
              </button>
              <button
                className="border px-2 py-1 rounded bg-red-500 text-white"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
              <button
                className="border px-2 py-1 rounded bg-green-500 text-white"
                onClick={() => presentStudentHandler(student.id)}
              >
                Present
              </button>
              <button
                className="border px-2 py-1 rounded bg-yellow-700 text-white"
                onClick={() => absentStudentHandler(student.id)}
              >
                Absent
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
