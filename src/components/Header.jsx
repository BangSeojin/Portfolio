import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <p className="logo">SEOJIN BANG</p>

        <nav className="hero-link">
          <a href="#about">ABOUT</a>
          <a href="#web">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
