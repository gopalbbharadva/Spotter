import React from "react";
import { Navbar, PostCard } from "../../components/componentExport";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const PostsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center border">
        <div>
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
