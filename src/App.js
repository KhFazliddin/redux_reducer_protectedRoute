import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Header from "./components/header";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import App2 from "./App2";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <App2/> */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<App2 />} />

          </Route>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
