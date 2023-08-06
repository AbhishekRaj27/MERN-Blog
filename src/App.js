import "./App.css";
import Header from "./Header";
import Article from "./Article";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Article />} />
        <Route path={"/login"} element={<div>Login Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
