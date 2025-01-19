import ImageWithText from "../../components/ImageWithText";
import { sections } from "./about.constant";
import StoryImage from "./StoryImage";

const AboutPage = () => {
  return (
    <div>
      {sections.map((section, index) => {
        if (section.type === "image") {
          return <ImageWithText key={index} image={section} />;
        }
        if (section.type === "story") {
          return <StoryImage key={index} image={section} />;
        }

        return null;
      })}
    </div>
  );
};

export default AboutPage;
