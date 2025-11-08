import { useEffect, useState } from "react";
// SAIT@003 // Complab-3
const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Window Resize Example</h2>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
};

export default Dashboard;
