import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useModal } from "../../contexts/ModalContext";
import { UserNotify } from "../UserNotify/UserNotify";

export const NotifyModal = () => {
  const { setShowNotifyModal } = useModal();

  const notifyInfo = [
    {
      imgSrc:
        "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/Best-Emotional-Whatsapp-Dp-Profile-Images-photo-pics-hd-2.gif",
      userName: "tom cruise",
      time: "10h",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQE5b3dFv1I4cahIc-g161R5jzNl9pOs3ZA&usqp=CAU",
      userName: "alex carry",
      time: "12h",
    },
    {
      imgSrc:
        "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-sweet-whatapp-dp-Images.jpg",
      userName: "sylvester stallone",
      time: "8h",
    },
  ];

  return (
    <div className="notify-modal-container">
      <div className="notify-modal">
        <button
          className="modal-close-btn"
          onClick={() => setShowNotifyModal(false)}
        >
          <VscChromeClose />
        </button>
        {notifyInfo.map((item) => (
          <UserNotify user={item} />
        ))}
      </div>
    </div>
  );
};
