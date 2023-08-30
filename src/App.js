
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import style from './app.module.css'
import WordInput from "./component/wordInput";
import WordRecite from "./component/wordRecite";
import {useState} from "react";

function App() {

  const [words,setWords] = useState([])

  const [status,setStatus] = useState("init")


  function outSetWords(words) {
    setWords(words)
    setStatus("reciting")
  }


  function complete() {
    setStatus('complete')
  }



  return (
    <div className={style.app}>
      {
        status === 'init' ? <WordInput submitWords={outSetWords} /> : null
      }
      {
        status === 'reciting' ? <WordRecite outWords={words} completeListener={() => complete()} /> : null
      }
      {
        status === 'complete' ? <p>背诵完成</p> : null
      }
    </div>
  );
}

export default App;
