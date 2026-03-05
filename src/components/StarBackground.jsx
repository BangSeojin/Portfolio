import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/starBackground.css";

export default function StarBackground() {
  const starsRef = useRef([]);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // 별 애니메이션
    starsRef.current.forEach((star) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;

      gsap.set(star, {
        top: randomY + "%",
        left: randomX + "%",
      });

      gsap.to(star, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // 유성 효과
    const createMeteor = () => {
      if (!containerRef.current) return;

      const meteor = document.createElement("span");
      meteor.className = "meteor";
      containerRef.current.appendChild(meteor);

      gsap.set(meteor, {
        top: Math.random() * 40 + "%",
        left: Math.random() * 100 + "%",
        opacity: 0.5,
      });

      gsap.to(meteor, {
        x: -300,
        y: 300,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => meteor.remove(),
      });
    };

    // 애니메이션 밀림 방지
    const scheduleMeteor = () => {
      const delay = Math.random() * 4000 + 2000;

      timeoutRef.current = setTimeout(() => {
        if (!document.hidden && Math.random() > 0.6) {
          createMeteor();
        }
        scheduleMeteor();
      }, delay);
    };

    scheduleMeteor();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="star-bg" ref={containerRef}>
      {[...Array(60)].map((_, i) => (
        <span
          key={i}
          className="star"
          ref={(el) => (starsRef.current[i] = el)}
        />
      ))}
    </div>
  );
}
