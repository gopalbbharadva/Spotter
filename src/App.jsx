import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, PostsPage, SignupPage, Profile } from "./page/pageExport";
import { Navbar, NotifyModal, PostModal } from "./components/componentExport";
import { useModal } from "./contexts/ModalContext";

const App = () => {
  const { showPostModal, showNotifyModal } = useModal();

  return (
    <div className="font-roboto">
      <Navbar />
      {showPostModal && <PostModal />}
      {showNotifyModal && <NotifyModal />}
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
