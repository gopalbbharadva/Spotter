import "./App.css";
import { Navbar } from "./components/componentExport";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {
    auth: { token },
  } = useSelector((state) => state);

  return (
    <div className="font-roboto">
      {token && <Navbar />}
      <AppRoutes />
      <Toaster />
    </div>
  );
};

export default App;
