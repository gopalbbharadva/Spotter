import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, PostsPage, SignupPage } from "./page/pageExport";

const App = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
};

export default App;
