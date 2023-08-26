import {InputGroup,Form,Button} from "react-bootstrap";
import {useState} from "react";


const validInputRegex = /^[A-Za-z\s]+$/;

export default function WordInput({submitWords}) {


    const [inputValue,setInputValue] = useState("")

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function  submit() {
        // 拆分为数组
        let split = inputValue.split(',');
        if(split === null || split.length === 0) {
            return
        }
        for (let i = 0; i < split.length; i++) {
            let word = split[i]
            let isWord = checkWord(word);
            if (!isWord) {
                 alert(`${word}不是一个单词`)
                return;
            }
        }
        submitWords(split)
    }


    function  checkWord(word) {
        return validInputRegex.test(word)
    }



    return (
        <>
            <InputGroup size='sm' className = 'mb-3'>
                <InputGroup.Text id = "inputGroup-sizing-sm" >
                    单词输入
                </InputGroup.Text>

                <Form.Control  value={inputValue}  onChange={handleInputChange}   aria-label='Small' aria-describedby='请输入单词,多个单词使用英文逗号隔开'/>
            </InputGroup>
            <div>
                <Button onClick={submit}>提交</Button>
            </div>
        </>
    )



}






