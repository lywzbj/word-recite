
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import style from './app.module.css'
import WordInput from "./component/wordInput";
import {useState} from "react";

function App() {

  const [words,setWords] = useState([])


  function outSetWords(words) {
    setWords(words)
  }
  return (
    <div className={style.app}>
      <WordInput submitWords={outSetWords} />
    </div>
  );
}

export default App;
