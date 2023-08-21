import http from "../../config/http";



// 背诵单词
export const reviewWord = (data,config) => {
    return http.post('/api/review/reviewWord',{data},config);
}


// 翻译单词
export const translate = (params,config) => {
    return http.get('/api/word/translate',{params,...config})
}