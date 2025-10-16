import "./App.css";
import { DUMMY_DATA, RESOURCE_HEADERS } from "./assets/data";
import Overview from "./Components/Overview";
import SideBar from "./Components/SideBar";
import ResourcePage from "./Components/ResourcePage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          }
        />
        {Object.keys(DUMMY_DATA).map((key) => (
          <Route
            key={key}
            path={`/dashboard/${key}`}
            element={
              <DashboardLayout>
                <ResourcePage
                  title={key}
                  resourceKey={key}
                  headers={RESOURCE_HEADERS[key]}
                />
              </DashboardLayout>
            }
          />
        ))}
        <Route path="*" element={<div className="p-6">Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};
