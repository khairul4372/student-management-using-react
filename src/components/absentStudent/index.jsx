import React from "react";

export default function AbsentStudent(props) {
  const { studentList, accidentallyAddedHandler } = props;

  return (
    <div className="ring-2 rounded-sm m-4 p-4 text-base space-y-2">
      <h2 className="text-xl">Absent</h2>
      <hr />
      {studentList.map((student) => {
        if (student.isPresent === false) {
          return (
            <div key={student.id} className="flex justify-between space-x-2">
              <p className="py-1">{student.name}</p>
              <button
                className="border px-2 py-1 rounded bg-red-300 text-white"
                onClick={() => accidentallyAddedHandler(student.id)}
              >
                accidentally added
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
