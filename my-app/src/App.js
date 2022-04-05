import "./App.css";
import { Home } from "./frontend/pages/home/Home";
import { Navbar } from "./frontend/components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
