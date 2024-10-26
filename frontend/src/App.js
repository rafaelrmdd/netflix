import GlobalStyle from "./globalStyles";
import Login from "./pages/Login"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>

    </>

  );
}

export default App;
