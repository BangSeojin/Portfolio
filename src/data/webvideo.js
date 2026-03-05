import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";
import Video4 from "../assets/video4.mp4";
import Video5 from "../assets/video5.mp4";

export function projectVideo(videoId) {
  switch (videoId) {
    case 1:
      return Video1;
    case 2:
      return Video2;
    case 3:
      return Video3;
    case 4:
      return Video4;
    case 5:
      return Video5;
    default:
      return null;
  }
}
