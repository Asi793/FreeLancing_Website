import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <a href="">Free Lancing</a>
        <nav>
          <ul>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">login</a></li>
          </ul>
        </nav>
      </div>

      <Login />
    </>
  );
}

export default App;
