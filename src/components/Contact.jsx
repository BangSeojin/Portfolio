import "../styles/contact.css";
import { iconImg } from "../data/icon.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <img src={iconImg(1)} />
            010-2229-4121
          </li>
          <li>
            <img src={iconImg(2)} />
            bang710109@gmail.com
          </li>
          <li>
            <a
              href="https://github.com/BangSeojin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconImg(3)} alt="GitHub" />
              GitHub account
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
