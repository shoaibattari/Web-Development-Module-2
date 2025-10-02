import React from "react";
import Button from "../../Common/Button";

const TodoCard = ({ item, index, editTodo, deleteTodo }) => {
  return (
    <li
      key={index}
      className="flex flex-col py-4 hover:bg-gray-200 hover:scale-105 scale-95 duration-300 gap-4 justify-between items-start bg-white shadow p-2 mb-2 rounded border-2 border-blue-300"
    >
      <p className="text-xl font-bold">{item}</p>
      <div className=" w-full flex justify-between items-center gap-2">
        <Button theme="dark" label={"Edit"} onClick={() => editTodo(index)} />
        <Button
          theme="danger"
          label={"Delete"}
          onClick={() => deleteTodo(index)}
        />
      </div>
    </li>
  );
};

export default TodoCard;
