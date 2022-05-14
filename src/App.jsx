import "./App.css";
import { Navbar, NotifyModal, PostModal } from "./components/componentExport";
import { useModal } from "./contexts/ModalContext";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const { showPostModal, showNotifyModal } = useModal();
  const authData = useSelector((state) => state.user);

  return (
    <div className="font-roboto">
      {authData.token && <Navbar />}
      {showPostModal && <PostModal />}
      {showNotifyModal && <NotifyModal />}
      <AppRoutes />
    </div>
  );
};

export default App;
