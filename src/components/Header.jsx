import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="#top" className="logo">
          SEOJIN
        </a>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
