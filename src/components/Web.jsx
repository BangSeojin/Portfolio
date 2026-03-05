import "../styles/web.css";
import { useState, useRef, useEffect } from "react";
import { webProjects } from "../data/webProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Web() {
  const boxesRef = useRef([]);
  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 영상 위치 제어
  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered(id);
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLeave = () => {
    setHovered(null);
  };

  // 프로젝트 등장 애니메이션
  useEffect(() => {
    boxesRef.current.forEach((box) => {
      if (!box) return;

      gsap.fromTo(
        box,
        {
          opacity: 0,
          x: window.innerWidth < 768 ? 100 : 280,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="web" id="web">
      <h1>Projects</h1>

      <div className="web-inner">
        <ul className="project-group">
          {webProjects.map((project, index) => (
            <li
              className="project-box"
              key={project.id}
              ref={(el) => (boxesRef.current[index] = el)}
            >
              {/* hover 시에 영상 나타나는 영역 */}
              <div
                className="project-left"
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={handleLeave}
              >
                <img src={project.image} alt={project.title} />

                {hovered === project.id && (
                  <div
                    className="video-preview"
                    style={{
                      left: position.x + 20,
                      top: position.y + 20,
                    }}
                  >
                    <video src={project.previewVideo} autoPlay muted loop />
                  </div>
                )}
              </div>
              <div className="project-right">
                <h2>{project.title}</h2>

                <ul className="right-info">
                  <li>
                    <h3>제작인원</h3>
                    <span>{project.members}</span>
                  </li>
                  <li>
                    <h3>제작기간</h3>
                    <span>{project.period}</span>
                  </li>
                  <li>
                    <h3>제작페이지</h3>
                    <span>{project.pages}</span>
                  </li>
                  <li>
                    <h3>사용툴</h3>
                    <span>{project.tools}</span>
                  </li>
                </ul>

                <div className="project-button">
                  {project.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      target={btn.blank ? "_blank" : "_self"}
                      rel={btn.blank ? "noopener noreferrer" : undefined}
                    >
                      <h3>{btn.label}</h3>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
