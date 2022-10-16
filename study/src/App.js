import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <headers>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </headers>
  );
}

function Nav() {
  return (
    <nav>
      <li>
        <a href="/">html</a>
      </li>
      <li>
        <a href="/">css</a>
      </li>
      <li>
        <a href="/">js</a>
      </li>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcom</h2>
      Hello, Web
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
