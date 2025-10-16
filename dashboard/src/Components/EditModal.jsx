import { useState } from "react";
import Button from "./Button";
import { FaPlus, FaSave } from "react-icons/fa";

const EditModal = ({ item, onClose, onSave, isCreating = false }) => {
  const [formData, setFormData] = useState(item || {});
  const [saving, setSaving] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      onSave(formData);
      setSaving(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-lg animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {isCreating ? "Add New Record" : "Edit Record"}
        </h2>

        {Object.keys(formData).map(
          (key, i) =>
            key !== "id" && (
              <div key={i} className="mb-3">
                <label className="block text-sm font-medium capitalize mb-1 text-gray-600">
                  {key.replaceAll("_", " ")}
                </label>
                <input
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )
        )}

        <div className="flex justify-end gap-3 mt-5">
          <Button
            text="Cancel"
            variant="secondary"
            onClick={onClose}
            showIcon={true}
            icon="FaTimes"
          />
          <Button
            text={isCreating ? "Create" : "Save"}
            variant="primary"
            loading={saving}
            showIcon={true}
            icon={isCreating ? "FaPlus" : "FaSave"}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
