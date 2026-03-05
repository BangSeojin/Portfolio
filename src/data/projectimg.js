import Img1 from "../assets/hero-star.png";
import Img2 from "../assets/scroll.png";
import Img3 from "../assets/about-img.png";
import Img4 from "../assets/contact.png";

export function projectImg(imgId) {
  switch (imgId) {
    case 1:
      return Img1;
    case 2:
      return Img2;
    case 3:
      return Img3;
    case 4:
      return Img4;
    default:
      return null;
  }
}
