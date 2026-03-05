import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-left">
        <p>본 사이트는 상업적 목적이 아닌 개인 포트폴리오로 제작되었습니다.</p>
        <p>© 2026 BANG SEO JIN. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a
          href="https://github.com/BangSeojin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github →
        </a>
      </div>
    </section>
  );
}
