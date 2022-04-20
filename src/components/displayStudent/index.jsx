import React, { useState } from "react";
import AllSudent from "../allStudent";
import PresentStudent from "../presentStudent";
import AbsentStudent from "../absentStudent";

export default function DisplayStudent(props) {
  const {
    studentList,
    setStudentList,
    setEditMode,
    setStudentName,
    setEditableStudent,
  } = props;
  const [presentStudentList, setPresentStudentList] = useState([]);
  const [absentStudentList, setAbsentStudentList] = useState([]);

  const presentStudentHandler = (id) => {
    const present = studentList.map((student) => {
      if (student.id === id) {
        if (student.isPresent === undefined) {
          student.isPresent = true;
          setPresentStudentList([...presentStudentList, student]);
        } else {
          alert("Already added");
        }
      }
      return student;
    });
    setStudentList(present);
  };

  const absentStudentHandler = (id) => {
    const absent = studentList.map((student) => {
      if (student.id === id) {
        if (student.isPresent === undefined) {
          student.isPresent = false;
          setAbsentStudentList([...absentStudentList, student]);
        } else {
          alert("Already added");
        }
      }
      return student;
    });
    setStudentList(absent);
  };
  const accidentallyAddedHandler = (id) => {
    const modifiedStudent = studentList.map((student) => {
      if (student.id === id) {
        student.isPresent = !student.isPresent;
      }
      return student;
    });
    setStudentList(modifiedStudent);
  };

  return (
    <div style={{ display: "flex" }}>
      <AllSudent
        studentList={studentList}
        setStudentList={setStudentList}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
        setEditableStudent={setEditableStudent}
        presentStudentHandler={presentStudentHandler}
        absentStudentHandler={absentStudentHandler}
      />
      <PresentStudent
        studentList={studentList}
        accidentallyAddedHandler={accidentallyAddedHandler}
      />
      <AbsentStudent
        studentList={studentList}
        accidentallyAddedHandler={accidentallyAddedHandler}
      />
      <div></div>
    </div>
  );
}
