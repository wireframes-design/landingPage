import React from "react";
import MultiBlogs from "@/page-sections/blogs/multiple-blogs/all-blogs/all-blogs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MultiBlogsTabs: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen pt-10 w-full mt-10">
      <Tabs
        defaultValue={"allBlogs"}
        className="w-full sm:w-3/4 md:w-full max-w-7xl"
      >
        <TabsList className="flex justify-center w-full gap-x-4 sm:gap-x-2 md:gap-x-4">
          <TabsTrigger value="allBlogs" className="w-full sm:w-auto bg-accent">
            All Blogs
          </TabsTrigger>
          <TabsTrigger
            value="recentBlogs"
            className="w-full sm:w-auto bg-accent"
          >
            Recent Blogs
          </TabsTrigger>
          <TabsTrigger value="tab" className="w-full sm:w-auto bg-accent">
            Tab
          </TabsTrigger>
        </TabsList>
        <TabsContent value="allBlogs" className="w-full">
          <div className="w-full">
            <MultiBlogs />
          </div>
        </TabsContent>
        <TabsContent id="recent-blogs" value="recentBlogs" className="w-full">
          <div className="w-full">{/* Component here */}</div>
        </TabsContent>
        <TabsContent value="tab" className="w-full">
          <div className="w-full">{/* Component here */}</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiBlogsTabs;
