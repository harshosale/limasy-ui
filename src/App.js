import "./App.css";
import { useSelector } from "react-redux";
import Login from "./login";
import Books from "./books";
import Transactions from "./transactions";

import NavBar from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile";

function App() {
  const token = useSelector((state) => state.token);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={token ? <Books /> : <Login />} />
        <Route path="books" element={token ? <Books /> : <Login />} />
        <Route
          path="transactions"
          element={token ? <Transactions /> : <Login />}
        />
        <Route path="profile" element={token ? <Profile /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
