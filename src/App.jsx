import {
  NavBar,
  Sidebar,
  Hero,
  About,
  TechStack,
  Projects,
  Footer,
  Contact,
} from "./sections";

const App = () => {
  return (
    <div className="bg-black-100">
      <NavBar />
      <Sidebar />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;