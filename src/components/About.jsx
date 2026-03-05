import "../styles/about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectImg } from "../data/projectimg.js";
import { useEffect, useRef } from "react";
import SkillSlide from "./SkillSlide.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    gsap.to(starRef.current, {
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      rotation: 3,
    });

    const ctx = gsap.context(() => {
      gsap.from(".about-left", {
        x: -200,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });

      gsap.from(".about-right", {
        x: 200,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h1>About</h1>
      <div className="about-inner">
        <div className="about-left">
          <div className="name">
            <h3>방서진</h3>
            <h3>Bang Seojin</h3>
          </div>
          <img src={projectImg(3)} ref={starRef} alt="푸른 별" />
        </div>
        <div className="about-right">
          <div className="introduce infobox">
            <p>
              웹 개발은 저에게 <span>코드로 작은 세계를 만들어가는 일</span>
              입니다.
              <br />
              작은 디테일까지 고민하며 화면을 완성하는 과정을 좋아합니다.
            </p>
            <p>
              HTML, CSS, JavaScript, JQuery, React 등을
              <br />
              활용해 웹 페이지를 구현하고 있습니다.
            </p>
            <p>
              앞으로도 차근차근 경험을 쌓아가며,
              <br />
              하나의 화면에도 의미를 담고자 노력하는 <span>웹 퍼블리셔</span>로
              성장하고자 합니다.
            </p>
          </div>
          <div className="info">
            <div className="infobox">
              <h3>CERTIFICATE</h3>
              <ul>
                <li>
                  <p>
                    2종 보통 운전면허
                    <br />
                    <span className="date">2024.10</span>
                  </p>
                </li>
                <li>
                  <p>
                    정보처리기능사
                    <br />
                    <span className="date">2021.10</span>
                  </p>
                </li>
                <li>
                  <p>
                    ITQ정보기술자격 (국가공인)
                    <br />
                    <span className="date">2018.12</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="infobox">
              <h3>EDUCATION</h3>
              <ul>
                <li>
                  <p>
                    웅진씽크빅 AI+웹 개발 취업캠프 백엔드 과정 수료
                    <br />
                    <span className="date">2023.07 ~ 2023.10</span>
                  </p>
                </li>
                <li>
                  <p>
                    경기과학기술대학교 컴퓨터모바일융합과 졸업
                    <br />
                    <span className="date">2018.3 ~ 2022.02</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="skill">
        <h3>Skill</h3>
        <SkillSlide />
        <div className="subskill">
          <h3>ETC</h3>
          <p>학업 과정에서 기초 학습</p>
        </div>
        <ul className="subskill-list">
          <li>MySQL</li>
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>Java</li>
          <li>Python</li>
          <li>Linux</li>
          <li>Arduino</li>
          <li>Raspberry Pi</li>
          <li>머신러닝 / 딥러닝</li>
          <li>OpenCV</li>
          <li>Illustrator</li>
          <li>Unity</li>
        </ul>
      </div>
    </section>
  );
}
