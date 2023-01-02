import "./App.scss";
import Game from "./components/Game/Game";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <div className="game">
        <div className="game-board">
          <div>
            <div className="board-row">
              <button className="square">1</button>
              <button className="square">2</button>
              <button className="square">3</button>
            </div>
            <div className="board-row">
              <button className="square">4</button>
              <button className="square">5</button>
              <button className="square">6</button>
            </div>
            <div className="board-row">
              <button className="square">7</button>
              <button className="square">8</button>
              <button className="square">9</button>
            </div>
          </div>
        </div>
      </div>
      <Game />
    </>
  );
}

export default App;
