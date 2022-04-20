import React from "react";

export default function PresentStudent(props) {
  const { studentList, accidentallyAddedHandler } = props;

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
        if (student.isPresent) {
          return (
            <p key={student.id}>
              {student.name}
              <button onClick={() => accidentallyAddedHandler(student.id)}>
                accidentally added
              </button>
            </p>
          );
        }
      })}
    </div>
  );
}
