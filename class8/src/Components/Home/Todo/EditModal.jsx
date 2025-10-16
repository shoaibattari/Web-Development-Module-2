import React from "react";
import Button from "../../Common/Button";

const EditModal = ({ todo, setTodo, closeModal, updateTodo }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-3xl">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <Button label={"Cancel"} theme={"danger"} onClick={closeModal} />
          <Button label={"Update"} theme={"dark"} onClick={updateTodo} />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
