import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Name from "./components/Name.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Name />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
