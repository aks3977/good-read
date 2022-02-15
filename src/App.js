import "./sass/main.scss";
import BlankHeader from "./utils/blankHeader";
import Home from "./container/home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AppRoute from "./Routes/AppRoute";

function App() {
  return (
    <div className="App">
      {/* <BlankHeader/> */}
      {/* <Home/> */}
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
