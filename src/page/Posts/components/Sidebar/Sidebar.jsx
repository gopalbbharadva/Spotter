import React from "react";
import { User } from "../../../../components/componentExport";

export const Sidebar = () => {
  return (
    <div className="hidden w-80 p-10 my-2 lg:block">
      <div className="flex justify-start items-center cursor-pointer">
        <div className="w-16 h-16">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
            alt=""
          />
        </div>
        <p className="ml-2 text-sm">admin user</p>
      </div>
      <p className="mt-5 text-sky-500">Suggestions for you</p>
      <User
        imgSrc=" 
              https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-sweet-whatapp-dp-Images.jpg"
      />
      <User imgSrc="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/Best-Emotional-Whatsapp-Dp-Profile-Images-photo-pics-hd-2.gif" />
      <User imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQE5b3dFv1I4cahIc-g161R5jzNl9pOs3ZA&usqp=CAU" />
    </div>
  );
};
