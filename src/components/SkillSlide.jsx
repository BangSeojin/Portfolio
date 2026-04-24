import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skillImages } from "../data/skillimg";
import "../styles/skillSlide.css";

export default function SkillSlide() {
  const containerRef = useRef(null);

  useEffect(() => {
    const groups = containerRef.current.querySelectorAll(".skillslide-group");

    const images = containerRef.current.querySelectorAll("img");

    // 이미지 로딩 완료 후 실행
    Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = resolve;
          }),
      ),
    ).then(() => {
      const groupWidth = groups[0].scrollWidth;

      gsap.to(groups, {
        x: -groupWidth,
        duration: 15,
        ease: "linear",
        repeat: -1,
      });
    });
  }, []);

  return (
    <div className="skillslide" ref={containerRef}>
      <div className="skillslide-group">
        {skillImages.map((icon, i) => (
          <img key={`first-${i}`} src={icon.src} alt={icon.alt} />
        ))}
      </div>

      <div className="skillslide-group">
        {skillImages.map((icon, i) => (
          <img key={`second-${i}`} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
}
