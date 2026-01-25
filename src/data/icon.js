import iconImg1 from "../assets/phone-call.png";
import iconImg2 from "../assets/mail.png";
import iconImg3 from "../assets/github.png";

export function iconImg(iconId) {
  switch (iconId) {
    case 1:
      return iconImg1;
    case 2:
      return iconImg2;
    case 3:
      return iconImg3;
    default:
      return null;
  }
}
