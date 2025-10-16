import { useEffect, useState } from "react";
import { DUMMY_DATA } from "../assets/data";
import EditModal from "./EditModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import Button from "./Button";
import DynamicTable from "./DynamicTable";

const ResourcePage = ({ title, resourceKey, headers }) => {
  const [data, setData] = useState(DUMMY_DATA[resourceKey]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsCreating(false);
    setShowEditModal(true);
  };

  const handleCreate = () => {
    const emptyItem = headers.reduce((acc, key) => {
      acc[key.toLowerCase().replace(/\s+/g, "_")] = "";
      return acc;
    }, {});
    emptyItem.id = Date.now(); // temp id
    setSelectedItem(emptyItem);
    setIsCreating(true);
    setShowEditModal(true);
  };

  const handleSave = (updatedItem) => {
    if (isCreating) {
      setData((prev) => [...prev, updatedItem]);
    } else {
      setData((prev) =>
        prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
    }
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setData((prev) => prev.filter((item) => item.id !== deleteId));
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl uppercase font-bold text-gray-800">{title}</h2>
        <Button
          text="Create New"
          showIcon={true}
          icon="FaPlus"
          variant="primary"
          onClick={handleCreate}
        />
      </div>

      <DynamicTable data={data} onEdit={handleEdit} onDelete={handleDelete} />

      {showEditModal && (
        <EditModal
          item={selectedItem}
          onClose={() => setShowEditModal(false)}
          onSave={handleSave}
          isCreating={isCreating}
        />
      )}

      {showDeleteModal && (
        <DeleteConfirmModal
          onConfirm={confirmDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};
export default ResourcePage;
