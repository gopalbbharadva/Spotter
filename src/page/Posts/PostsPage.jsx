import React from "react";
import { PostCard } from "../../components/componentExport";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const PostsPage = () => {
  return (
    <div className="px-2 flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div>
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
        </div>
        <div className="hidden w-80 p-10 my-2 lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
