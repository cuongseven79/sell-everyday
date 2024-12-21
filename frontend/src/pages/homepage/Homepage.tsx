import { banners } from "assets";
import Slideshow from "components/Slideshow";

const Homepage = () => {
  return (
    <div className="">
      <Slideshow imgURLs={banners} autoScroll />
    </div>
  );
};

export default Homepage;
