import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./page/pageExport";

const App = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
