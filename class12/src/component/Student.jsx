import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  updateStudent,
  deleteStudent,
  fetchStudents,
} from "../studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.list);

  const [formData, setFormData] = useState({
    id: null,
    fullName: "",
    section: "",
    result: "",
  });

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch, updateStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateStudent(formData));
    } else {
      dispatch(addStudent(formData));
    }
    setFormData({ id: null, fullName: "", section: "", result: "" });
  };

  const handleEdit = (student) => {
    setFormData(student);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
    dispatch(fetchStudents());
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">🎓 Student Management</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md w-80 mb-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Section"
          value={formData.section}
          onChange={(e) =>
            setFormData({ ...formData, section: e.target.value })
          }
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Result"
          value={formData.result}
          onChange={(e) => setFormData({ ...formData, result: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 w-full rounded hover:bg-blue-600"
        >
          {formData.id ? "Update Student" : "Add Student"}
        </button>
      </form>

      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">Student List</h2>
        {students.length === 0 ? (
          <p className="text-gray-500">No students added yet.</p>
        ) : (
          students.map((student) => (
            <div
              key={student.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-bold">{student.fullName}</p>
                <p className="text-sm text-gray-600">
                  {student.section} - {student.result}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(student)}
                  className="text-green-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student)}
                  // onClick={() => dispatch(deleteStudent(student.id))}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Student;
