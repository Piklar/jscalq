import './App.css';

function Key({label, clickHandler}) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display() {
  return (
    <>0</>
  );
}

function App() {

  const clickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    alert(value);
  }

  return (
    <div className="App">
      <div className="Calc">
        <div className="Dsply">
          <Display />
        </div>

        <div className="Bttns">
        <Key label={7} clickHandler={clickHandler} />
          <Key label={8} clickHandler={clickHandler} />
          <Key label={9} clickHandler={clickHandler} />
          <Key label={"/"} clickHandler={clickHandler} />
          <Key label={4} clickHandler={clickHandler} />
          <Key label={5} clickHandler={clickHandler} />
          <Key label={6} clickHandler={clickHandler} />
          <Key label={"*"} clickHandler={clickHandler} />
          <Key label={1} clickHandler={clickHandler} />
          <Key label={2} clickHandler={clickHandler} />
          <Key label={3} clickHandler={clickHandler} />
          <Key label={"-"} clickHandler={clickHandler} />
          <Key label={"CLR"} clickHandler={clickHandler} />
          <Key label={0} clickHandler={clickHandler} />
          <Key label={"="} clickHandler={clickHandler} />
          <Key label={"+"} clickHandler={clickHandler} />

        </div>
      </div>
    </div>
  );
}

export default App;
