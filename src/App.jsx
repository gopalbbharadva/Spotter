import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, PostsPage, SignupPage, Profile } from "./page/pageExport";
import { Navbar } from "./components/componentExport";

const App = () => {
  return (
    <div className="font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
