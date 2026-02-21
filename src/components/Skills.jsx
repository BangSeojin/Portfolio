import "../styles/skills.css";
import "../styles/titleFlow.css";

export default function Skills() {
  return (
    <section id="skills" className="section-flow">
      <h2>Skills</h2>
      <div>
        <h3>Core Skills</h3>
        <ul className="skill-list">
          <li>
            <span className="tag">HTML</span>
          </li>
          <li>
            <span className="tag">CSS</span>
          </li>
          <li>
            <span className="tag">JavaScript</span>
          </li>
          <li>
            <span className="tag">React</span>
          </li>
          <li>
            <span className="tag">jQuery</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Tools & Environment</h3>
        <ul className="skill-list">
          <li>
            <span className="tag">Figma</span>
          </li>
          <li>
            <span className="tag">Photoshop</span>
          </li>
          <li>
            <span className="tag">Vite</span>
            <span className="explan">React 개발 환경 구성</span>
          </li>
          <li>
            <span className="tag">Bootstrap</span>
          </li>
          <li>
            <span className="tag">Vercel</span>
            <span className="explan">배포 환경 구성</span>
          </li>
          <li>
            <span className="tag">Git</span>
            <span className="explan">소스 코드 관리 및 프로젝트 공유</span>
          </li>
          <li>
            <span className="tag">Visual Studio</span>
          </li>
          <li>
            <span className="tag">Slack</span>
          </li>
        </ul>
      </div>
      <div>
        <div id="etc">
          <h3>ETC</h3>
          <span className="explan">학업 과정에서 기초 학습</span>
        </div>
        <ul className="skill-list">
          <li>
            <span className="tag">MySQL</span>
          </li>
          <li>
            <span className="tag">C</span>
          </li>
          <li>
            <span className="tag">C++</span>
          </li>
          <li>
            <span className="tag">C#</span>
          </li>
          <li>
            <span className="tag">Java</span>
          </li>
          <li>
            <span className="tag">Python</span>
          </li>
          <li>
            <span className="tag">Linux</span>
          </li>
          <li>
            <span className="tag">Arduino</span>
          </li>
          <li>
            <span className="tag">Raspberry Pi</span>
          </li>
          <li>
            <span className="tag">머신러닝 / 딥러닝</span>
          </li>
          <li>
            <span className="tag">OpenCV</span>
          </li>
          <li>
            <span className="tag">Illustrator</span>
          </li>
          <li>
            <span className="tag">Unity</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
