import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAppData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {appData ? <Main {...appData} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
