import Button from "./Button";

const DynamicTable = ({ data, onEdit, onDelete }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 border rounded-md">
        No data available
      </div>
    );
  }

  // Dynamically extract headers from the first object
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-6  fade-in-right">
      <table className="w-full border-collapse">
        {/* ===== Table Header ===== */}
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            {headers.map((key) => (
              <th key={key} className="py-3 px-4 border-b text-left">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
            <th className="py-3 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>

        {/* ===== Table Body ===== */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              {headers.map((key) => (
                <td
                  key={key}
                  className={`py-2 px-4 w-fit rounded-2xl ${
                    key === "status"
                      ? item[key] === "Completed"
                        ? " text-green-800 font-medium"
                        : item[key] === "Pending"
                        ? " text-yellow-800 font-medium"
                        : item[key] === "Cancelled"
                        ? " text-red-800 font-medium"
                        : ""
                      : ""
                  }`}
                >
                  {item[key]}
                </td>
              ))}
              <td className="py-2 px-4 flex justify-center gap-2">
                <Button
                  text="Edit"
                  variant="secondary"
                  showIcon={true}
                  icon="FaEdit"
                  onClick={() => onEdit(item)}
                />
                <Button
                  text="Delete"
                  variant="danger"
                  showIcon={true}
                  icon="FaTrash"
                  onClick={() => onDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
