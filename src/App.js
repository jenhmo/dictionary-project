import './App.css';
import axios from "axios";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Jen Morgan
        </small>
      </footer>
      </div>
    </div>
  );
}