import { webImg } from "./webimg";
import { projectVideo } from "./webvideo";

export const webProjects = [
  {
    id: 5,
    title: "개인 포트폴리오",
    image: webImg(5),
    previewVideo: projectVideo(5),
    members: "1인",
    period: "4일",
    pages: "메인페이지",
    tools: "HTML / CSS / JS / REACT / GSAP",
    buttons: [
      {
        label: "Go",
        link: "https://seojin-portfolio-neon.vercel.app/",
        blank: true,
      },
      {
        label: "Code",
        link: "https://github.com/BangSeojin/Portfolio",
        blank: true,
      },
    ],
  },

  {
    id: 1,
    title: "가구 브랜드 사이트",
    image: webImg(1),
    previewVideo: projectVideo(1),
    members: "1인",
    period: "3일",
    pages: "메인페이지",
    tools: "HTML / CSS / JS / GSAP",
    buttons: [
      { label: "Go", link: "https://brandhome.vercel.app/", blank: true },
      {
        label: "Code",
        link: "https://github.com/BangSeojin/Cozy-Brand-Home",
        blank: true,
      },
    ],
  },
  {
    id: 2,
    title: "반려견 간식 사이트 리뉴얼",
    image: webImg(2),
    previewVideo: projectVideo(2),
    members: "1인",
    period: "4일",
    pages: "메인페이지",
    tools: "HTML / CSS / JQUERY / FIGMA",
    buttons: [
      {
        label: "Figma",
        link: "https://www.figma.com/design/zqe96PLmuLlSMq3MLCvjG9/%EB%9E%91%EC%9D%B4%EB%84%A4-%EC%8B%9D%ED%83%81?node-id=0-1&t=M0z3TumIUuthpfiO-1",
        blank: true,
      },
      { label: "Go", link: "https://rangstable.vercel.app/", blank: true },
      {
        label: "Code",
        link: "https://github.com/BangSeojin/Rangstable",
        blank: true,
      },
    ],
  },
  {
    id: 3,
    title: "병원 사이트 리뉴얼",
    image: webImg(3),
    previewVideo: projectVideo(3),
    members: "1인",
    period: "14일",
    pages: "메인페이지",
    tools: "HTML / CSS / JS / BOOTSTRAP / FIGMA",
    buttons: [
      {
        label: "Figma",
        link: "https://www.figma.com/design/44vuPVKOh278Ujgg6sbDD8/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4--%EB%B3%91%EC%9B%90-%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&t=FbiNEzDDPquXwmJA-1",
        blank: true,
      },
      { label: "Go", link: "https://cau-hospital.vercel.app/", blank: true },
      {
        label: "Code",
        link: "https://github.com/BangSeojin/CAUhospital",
        blank: true,
      },
    ],
  },
  {
    id: 4,
    title: "감정 일기장",
    image: webImg(4),
    previewVideo: projectVideo(4),
    members: "1인",
    period: "5일",
    pages: "메인페이지",
    tools: "HTML / CSS / JS / REACT",
    buttons: [
      {
        label: "Go",
        link: "https://emotion-diary-gilt-theta.vercel.app/",
        blank: true,
      },
      {
        label: "Code",
        link: "https://github.com/BangSeojin/EmotionDiary",
        blank: true,
      },
    ],
  },
];
