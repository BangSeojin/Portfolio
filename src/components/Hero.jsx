import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectImg } from "../data/projectimg.js";
import "../styles/hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const middleImgRef = useRef(null);
  const bottomImgRef = useRef(null);

  useEffect(() => {
    // 폰트 애니메이션
    gsap.to(titleRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      rotation: 2,
    });

    // 스크롤 이미지 애니메이션
    gsap.to(bottomImgRef.current, {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      rotation: 5,
    });

    // 중앙의 별 이미지 애니메이션
    gsap.to(middleImgRef.current, {
      scale: 30, // 원하는 만큼
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom end",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="content-title" ref={titleRef}>
          <h1>안녕하세요!</h1>
          <p>코드로 작은 세계를 가꾸는</p>
          <p>
            <span>웹 퍼블리셔, 방서진 </span>입니다
          </p>
        </div>
        <div className="content-img">
          <img
            ref={middleImgRef}
            src={projectImg(1)}
            id="heroimg-1"
            alt="별 이미지"
          />
        </div>
        <div className="content-img" ref={bottomImgRef}>
          <img src={projectImg(2)} alt="마우스 스크롤" />
          <p>SCROLL</p>
        </div>
      </div>
    </section>
  );
}
