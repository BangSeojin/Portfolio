import { projectImg } from "../data/projectsimg.js";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects section-flow" id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        <div className="project-card">
          <div className="project-img">
            <img src={projectImg(5)} alt="반려견 수제간식 사이트" />
          </div>

          <div className="project-content">
            <div className="style-flex">
              <h1 className="project-num">01</h1>
              <h1 className="project-title">반려견 수제간식 사이트</h1>
            </div>
            <p>jQuery를 사용하여 제작한 웹 사이트</p>
            <ul>
              <li>모바일 퍼스트 전략을 적용한 반응형 UI 설계</li>
              <li>
                터치 이벤트 제어 및 무한 루프 로직을 적용한 커스텀 슬라이드 구현
              </li>
              <li>data-target 기반 클래스 토글 방식의 jQuery 인터랙션 설계</li>
            </ul>
            <p>작업인원: 1인</p>
            <p>작업기간: 4일</p>
            <div className="style-flex">
              <span className="projecttag projecttag-main">HTML</span>
              <span className="projecttag projecttag-css">CSS</span>
              <span className="projecttag projecttag-jquery">jQuery</span>
              <span className="projecttag projecttag-figma">Figma</span>
            </div>
            <div className="style-flex">
              <a
                href="https://www.figma.com/design/zqe96PLmuLlSMq3MLCvjG9/%EB%9E%91%EC%9D%B4%EB%84%A4-%EC%8B%9D%ED%83%81?node-id=0-1&t=ZFCuaDEpPVTwiCZi-1"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Figma
              </a>
              <a
                href="https://rangstable.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Go
              </a>
              <a
                href="https://github.com/BangSeojin/Rangstable"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectImg(1)} alt="병원 사이트" />
          </div>

          <div className="project-content">
            <div className="style-flex">
              <h1 className="project-num">02</h1>
              <h1 className="project-title">병원 사이트</h1>
            </div>
            <p>
              Vanilla JavaScript 기반 병원 웹 사이트 메인 페이지
              <br />
              헤더 네비게이션에 Bootstrap 부분 적용
            </p>
            <ul>
              <li>슬라이더 / 버튼 등 인터랙션 구현</li>
              <li>미디어쿼리를 사용한 반응형 웹</li>
              <li>카카오맵 API 연동</li>
            </ul>
            <p>작업인원: 1인</p>
            <p>작업기간: 2주</p>
            <div className="style-flex">
              <span className="projecttag projecttag-main">HTML</span>
              <span className="projecttag projecttag-css">CSS</span>
              <span className="projecttag projecttag-js">JS</span>
              <span className="projecttag projecttag-bootstrap">Bootstrap</span>
              <span className="projecttag projecttag-figma">Figma</span>
            </div>
            <div className="style-flex">
              <a
                href="https://www.figma.com/design/44vuPVKOh278Ujgg6sbDD8/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4--%EB%B3%91%EC%9B%90-%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&t=4NiPSWi98a5DjC1J-1"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Figma
              </a>
              <a
                href="https://cau-hospital.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Go
              </a>
              <a
                href="https://github.com/BangSeojin/CAUhospital"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectImg(2)} alt="감정 일기장" />
          </div>

          <div className="project-content">
            <div className="style-flex">
              <h1 className="project-num">03</h1>
              <h1 className="project-title">감정 일기장</h1>
            </div>
            <p>
              React 학습 중 제작한 로컬스토리지를 활용한 감정 기록 웹 사이트
            </p>
            <ul>
              <li>일기 작성 / 수정 / 삭제 기능 구현</li>
              <li>LocalStorage를 활용한 데이터 저장</li>
            </ul>
            <p>작업인원: 1인</p>
            <p>작업기간: 5일</p>
            <div className="style-flex">
              <span className="projecttag projecttag-main">React</span>
            </div>
            <div className="style-flex">
              <a
                href="https://emotion-diary-gilt-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Go
              </a>
              <a
                href="https://github.com/BangSeojin/EmotionDiary"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectImg(3)} alt="Todo List" />
          </div>

          <div className="project-content">
            <div className="style-flex">
              <h1 className="project-num">04</h1>
              <h1 className="project-title">Todo List</h1>
            </div>
            <p>React 학습 중 제작한 할 일 관리 웹 사이트</p>
            <ul>
              <li>할 일 추가 / 삭제 / 완료 체크 기능 구현</li>
              <li>상태 관리 Hook을 활용한 Todo 상태 관리</li>
            </ul>
            <p>작업인원: 1인</p>
            <p>작업기간: 5일</p>
            <div className="style-flex">
              <span className="projecttag projecttag-main">React</span>
            </div>
            <div className="style-flex">
              <a
                href="https://todo-list-seven-gilt-17.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Go
              </a>
              <a
                href="https://github.com/BangSeojin/TodoList"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectImg(4)} alt="포트폴리오" />
          </div>

          <div className="project-content">
            <div className="style-flex">
              <h1 className="project-num">05</h1>
              <h1 className="project-title">Portfolio Site</h1>
            </div>
            <p>React로 제작한 개인 포트폴리오 웹 사이트</p>
            <ul>
              <li>섹션별 컴포넌트 분리를 통한 구조적 설계</li>
              <li>스크롤 이동 기반 네비게이션 구현</li>
              <li>그라데이션 애니메이션을 활용한 시각적 포인트</li>
              <div className="style-flex">
                <span className="projecttag projecttag-main">React</span>
              </div>
            </ul>
            <p>작업인원: 1인</p>
            <p>작업기간: 1주</p>
            <div className="style-flex">
              <a
                href="https://portfolio-iota-red-6x0ro2nqn6.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Go
              </a>
              <a
                href="https://github.com/BangSeojin/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="sitebtn"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
