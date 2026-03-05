import "../styles/contact.css";
import { projectImg } from "../data/projectimg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // h2 등장 애니메이션
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 2, ease: "power4.in" },
    )

      // span 색상 변경 애니메이션
      .to(
        spanRef.current,
        {
          color: "var(--spaceblue)",
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3",
      )

      // 이미지 등장 애니메이션
      .fromTo(
        imgRef.current,
        {
          opacity: 0,
          x: -150,
          y: 120,
          scale: 0.9,
          rotation: 6,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "+=0.2",
      )

      // 이미지 부유 애니메이션
      .add(() => {
        gsap.to(imgRef.current, {
          y: 12,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 이미지 3D 효과

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    gsap.to(imgRef.current, {
      rotateY: percentX * 8,
      rotateX: -percentY * 8,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
      transformOrigin: "center",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <h1>Contact</h1>

      <div className="contact-inner">
        <h2 ref={titleRef}>
          함께 작은 세상을 가꾸어 나갈 <span ref={spanRef}>웹 퍼블리셔</span>가
          필요하신가요?
        </h2>

        <div
          className="contact-img"
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={projectImg(4)} alt="명함 이미지" />
        </div>
      </div>
    </section>
  );
}
