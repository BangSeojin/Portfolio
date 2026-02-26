import projectImg1 from "../assets/project_1.png";
import projectImg2 from "../assets/project_2.png";
import projectImg3 from "../assets/project_3.png";
import projectImg4 from "../assets/project_4.png";
import projectImg5 from "../assets/project_5.png";
import projectImg6 from "../assets/project_6.png";

export function projectImg(projectId) {
  switch (projectId) {
    case 1:
      return projectImg1;
    case 2:
      return projectImg2;
    case 3:
      return projectImg3;
    case 4:
      return projectImg4;
    case 5:
      return projectImg5;
    case 6:
      return projectImg6;
    default:
      return null;
  }
}
