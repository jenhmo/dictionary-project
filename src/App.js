import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="discover" />
      </main>
      <footer className="App-footer">
        <small>
        Coded by <strong>Jen Morgan</strong>
        <br />
        This project is <a href='https://github.com/jenhmo/dictionary-project'>open-source</a> and hosted on <a href='https://endearing-caramel-b84297.netlify.app/'>Netlify</a>
        </small>
      </footer>
      </div>
    </div>
  );
}