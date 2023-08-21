
import {Button} from "react-bootstrap";
import {translate} from "../api/recite";
import {useEffect, useState} from "react";


export default function WordRecite({outWords}) {


    const [words,setWords] = useState([])


    useEffect( () => {
        setWords(outWords)
        recite(outWords[0])
    })


    function recite(word) {
        console.log(`背诵单词:${word}`)

     let parameter = {word:word}

        translate(parameter).then(res => {
            console.log(res)
        } )
    }




    return (
        <>
          <div style={{
              display:'flex',
              flexDirection: 'column'
          }}>
              <div>
                  <Button variant="primary" size="lg">发音</Button>
              </div>

              <div>
                  <Button variant="success" size="lg">下一个</Button>
              </div>

              <div>
                  <Button variant="info" size="lg">提示</Button>
              </div>
          </div>

        </>

    )



}
