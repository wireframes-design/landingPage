import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import blogs from "@/datasets/blogs.json";
import { cn } from "@/lib/utils";

interface DrawerDialogDemoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  blogId?: number | null;
  classNameImage?: string;
}

const DrawerDialogDemo: React.FC<DrawerDialogDemoProps> = ({
  open,
  setOpen,
  blogId,
  classNameImage,
}) => {
  const blogData = blogs.find((blog) => blog.id === blogId);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[90vw] max-h-[95svh] overflow-y-auto bg-none">
        {/* <DialogContent className="sm:max-w-[90vw] max-h-[90vh] overflow-y-auto bg-none"> */}
        <DialogHeader>
          {blogData ? (
            <>
              <DialogTitle className="text-3xl text-start bg-none">
                {blogData?.title}
              </DialogTitle>

              <DialogDescription>
                <div className="flex justify-between w-96 mt-2">
                  <div className="text-md font-bold">
                    Publish Date :- {blogData.date}
                  </div>
                  {/* <div className="text-md font-bold">{blogData.author}</div> */}
                </div>
                <div>
                  <img
                    src={blogData?.image}
                    alt={blogData?.title}
                    className={cn(
                      "rounded-lg max-h-96 w-62 object-fill mt-3",
                      classNameImage
                    )}
                  />
                  <div
                    className="text-base text-start text-balance mt-3 w-half"
                    dangerouslySetInnerHTML={{ __html: blogData?.description }}
                  />
                </div>
              </DialogDescription>
            </>
          ) : (
            <p>No blog data available</p>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DrawerDialogDemo;
