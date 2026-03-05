import Img1 from "../assets/webimg1.png";
import Img2 from "../assets/webimg2.png";
import Img3 from "../assets/webimg3.png";
import Img4 from "../assets/webimg4.png";
import Img5 from "../assets/webimg5.png";

export function webImg(imgId) {
  switch (imgId) {
    case 1:
      return Img1;
    case 2:
      return Img2;
    case 3:
      return Img3;
    case 4:
      return Img4;
    case 5:
      return Img5;
    default:
      return null;
  }
}
