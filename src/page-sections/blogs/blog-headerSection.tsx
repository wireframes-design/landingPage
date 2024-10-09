import { useParams } from "react-router-dom";
import blogs from "@/datasets/blogs.json";
import { useEffect } from "react";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import HeroSectionWithProps from "@/wireframes/page-sections/hero/HeroSectionWithProps";

const BlogHeaderSection: React.FC = () => {
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

  const PatternComponent = () => (
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
    />
  );
  const BlogsComponent = () => {
    return <></>;
  };

  return (
    <HeroSectionWithProps
      title={blog.title}
      description={blog["short_description"]}
      PatternComponent={PatternComponent}
      marqueeList={[]}
      categories={blog.categories}
      MarqueeCardComponent={BlogsComponent}
    />
  );
};

export default BlogHeaderSection;
