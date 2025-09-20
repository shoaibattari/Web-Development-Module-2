import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div className="h-screen bg-black">
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
