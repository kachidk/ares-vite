import { BrowserRouter } from "react-router-dom";
import { routes } from "./navigation/routes";
import "./styles/tailwind.css";

function App() {
  return <BrowserRouter>{routes()}</BrowserRouter>;
}

export default App;
