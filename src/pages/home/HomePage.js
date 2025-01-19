import ImageSlider from "../../components/ImageSlider";
import { sections, sliderImages } from "./home.constant";
import TextSection from "../../components/TextSection";
import VideoPlay from "../../components/VideoPlay";

const HomePage = () => {
  return (
    <div>
      <ImageSlider images={sliderImages} />

      {sections.map((section, index) => {
        if (section.type === "text") {
          return <TextSection key={index} section={section} index={index} />;
        }

        if (section.type === "image") {
          return <ImageSlider single={true} images={[section]} />;
        }
        if (section.type === "video") {
          return <VideoPlay video={section} />;
        }

        return null;
      })}
    </div>
  );
};

export default HomePage;
