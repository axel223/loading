import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const defaultColor = 'grey';
const selectedColor = 'green';

const changeBackGround = (event, setSelected) => {
  const id = event.target.id;
  const currentBox = document.getElementById(id); 
  currentBox.style.background = selectedColor;
  setSelected((prev) => {
    return new Set([...prev, id]);
  });
};

const Box = (id, setSelected) => {
  return (
    <div
      id={id}
      style={{ background: defaultColor, height: "50px", width: "70px" }}
      className="btn btn-primary"
      onClick={(event) => {
        changeBackGround(event, setSelected);
      }}
    ></div>
  );
};

function App() {
  const [selected, setSelected] = useState(new Set([]));
  useEffect(() => {
    if (selected.size == 7) {
      for(const id of selected) {
        setTimeout(() => {
          const currentBox = document.getElementById(id); 
          currentBox.style.background = defaultColor;
        }, parseInt(id) * 300);
      }
      setSelected(new Set([]));
    }
    
  }, [selected]);

  return (
    <div className="App">
      <table align="left">
        <tr>
          <td>{Box("3", setSelected)}</td>
          <td>{Box("2", setSelected)}</td>
          <td>{Box("1", setSelected)}</td>
        </tr>
        <tr align="left">
          <td>{Box("4", setSelected)}</td>
        </tr>
        <tr>
          <td>{Box("5", setSelected)}</td>
          <td>{Box("6", setSelected)}</td>
          <td>{Box("7", setSelected)}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
