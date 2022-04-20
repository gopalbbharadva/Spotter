import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);

  return (
    <modalContext.Provider
      value={{
        showPostModal,
        setShowPostModal,
        showNotifyModal,
        setShowNotifyModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModal = () => useContext(modalContext);

export { useModal, ModalProvider };
