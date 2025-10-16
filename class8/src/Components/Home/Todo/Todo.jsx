import { useState } from "react";

import Button from "../../Common/Button";
import EditModal from "./EditModal";
import TodoCard from "./TodoCard";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    "Learn React",
    "Practice Tailwind CSS",
    "Build Todo App",
    "Study JavaScript",
    "Read about Next.js",
    "Watch coding tutorials",
    "Make a mini project",
    "Review Git & GitHub",
    "Plan daily tasks",
    "Take a break & relax",
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  // Delete Todo
  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  // Open Edit Modal
  const editTodo = (index) => {
    setTodo(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Update Todo (called from Modal)
  const updateTodo = () => {
    if (todo.trim() === "") return;
    const updated = [...todos];
    updated[editIndex] = todo;
    setTodos(updated);
    setIsEditing(false);
    setEditIndex(null);
    setTodo("");
  };

  return (
    <div className="w-full min-h-screen oveflow-y-auto bg-black flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border border-gray-400 p-2 rounded w-64 text-white"
          placeholder="Enter todo..."
        />

        <Button label={"Add"} theme="dark" onClick={addTodo} />
      </div>

      <ul className="w-full max-w-7xl grid grid-cols-3 gap-2 pb-24">
        {todos.length === 0 && (
          <p className="text-center text-gray-500 col-span-3 pt-3">
            Todos Not Found
          </p>
        )}
        {todos.map((item, index) => (
          <TodoCard
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            item={item}
            index={index}
          />
        ))}
      </ul>

      {/* Edit Modal */}
      {isEditing && (
        <EditModal
          todo={todo}
          setTodo={setTodo}
          closeModal={() => setIsEditing(false)}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
};

export default Todo;
