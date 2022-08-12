import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Jen Morgan that is <a href='https://app.netlify.com/sites/endearing-caramel-b84297/overview'>open-source</a>
        </small>
      </footer>
      </div>
    </div>
  );
}