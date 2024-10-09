import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import HeroSectionWithProps from "@/wireframes/page-sections/hero/HeroSectionWithProps";
import blogsData from "@/datasets/blogs.json"

const MultiBlogHeaderSection: React.FC = () => {

  const blogsCategories = blogsData[0]?.categories || "";

  const BlogsDescription =  ("Blogs serve as a dynamic platform for sharing ideas, insights, and expertise on a wide array of topics. They allow writers to connect with a global audience, fostering community and discussion. Blogs can range from personal diaries to professional analyses, providing diverse content for readers. With the ability to include multimedia elements, blogs enhance engagement and understanding. Regular updates keep content fresh and relevant, attracting repeat visitors and building a loyal following.")

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
    return (
      <></>
    );
  };

  return (
    <HeroSectionWithProps
      title={"Blogs"}
      description={BlogsDescription}
      PatternComponent={PatternComponent}
      marqueeList={[]}
      categories={blogsCategories}
      MarqueeCardComponent={BlogsComponent}
    />
  );
};

export default MultiBlogHeaderSection;
