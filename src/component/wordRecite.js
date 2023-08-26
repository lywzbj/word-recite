
import {Button} from "react-bootstrap";
import {translate} from "../api/recite";
import {useEffect, useState} from "react";


export default function WordRecite({outWords}) {


    const [words,setWords] = useState([])
    const [currentWord,setCurrentWord] = useState('')
    const [videoUrlUS,setVideoUrlUS] = useState('')
    const [videoUrlUK,setVideoUrlUk] = useState('')
    const [index,setIndex] = useState(0)


    useEffect( () => {
        setWords(outWords)
        setCurrentWord(outWords[index])
    })


    function next() {

        let newIndex = index + 1;
        if(newIndex > words.length) {
            alert("单词已经背诵完成")
            return;
        }
        setIndex(newIndex)
        let word =  words[newIndex]
        setCurrentWord(word)
        // 请求接口
        recite();
    }


    function recite() {
        let word = currentWord
     let parameter = {word:word}
        translate(parameter).then(res => {
            let data =  res.data.data
            setVideoUrlUk(() => data.videoUrlUK)
            setVideoUrlUS(() => data.videoUrlUS)
        } )
    }







    return (
        <>
          <div style={{
              display:'flex',
              flexDirection: 'column'
          }}>
              <div>
                  <label>美音</label>
                  <audio
                      controls
                      src={videoUrlUS}
                  />
              </div>
              <div>
                  <label>英音</label>
                  <audio
                      controls
                      src={videoUrlUK}
                  />
              </div>

              <div>
                  <Button variant="success" size="lg"  onClick={() => next()} >下一个</Button>
              </div>

              <div>
                  <Button variant="info" size="lg">提示</Button>
              </div>
          </div>

        </>

    )



}
