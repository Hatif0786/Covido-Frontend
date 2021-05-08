import './App.css';
import Homepage from "./pages/homepage";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import "./pages/style.css";

function App() {
  return (
    <div className="App">
   {/*    <Homepage/> */}
   <BrowserRouter>
   <Routes/>
   </BrowserRouter>
    </div>
  );
}

export default App;

