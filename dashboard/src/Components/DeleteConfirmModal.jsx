import { useState } from "react";
import Button from "./Button";

const DeleteConfirmModal = ({ onConfirm, onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleConfirm = () => {
    setDeleting(true);
    setTimeout(() => {
      onConfirm();
      setDeleting(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
        <div className="flex justify-center gap-3 mt-3">
          <Button text="Cancel" variant="secondary" onClick={onClose} />
          <Button
            text="Delete"
            variant="danger"
            showIcon={true}
            icon="FaTrash"
            loading={deleting}
            onClick={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
