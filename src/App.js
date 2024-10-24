import "./App.css";
import Page from "./containers/page";
import About from "./containers/page/about";
import Projects from "./containers/page/projects/projects";
import Connect from "./containers/page/connect/connect";
import Navbar from "./containers/page/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Page />
        <About />
        <Projects />
        <Connect />
      </header>
    </div>
  );
}

export default App;
