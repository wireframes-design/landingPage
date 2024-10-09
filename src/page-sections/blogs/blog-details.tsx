import { useParams } from "react-router-dom";
import blogs from "@/datasets/blogs.json";
import { useEffect } from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";

const BlogDetails: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const blog = blogs.find((blog) => blog.id === parseInt(id ?? "", 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="text-center justify-center items-center">
        Service not found
      </div>
    );
  }

  return (
    <HeroSectionChildren id="blogs">
      <div>
        <section className="mb-10 px-4">
          <div
            className="text-base text-start text-balance "
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </section>
      </div>
    </HeroSectionChildren>
  );
};

export default BlogDetails;
