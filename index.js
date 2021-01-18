const express =require("express"); // express 불러오기
const app = express(); // application 만들기(express 실행해서 담기)

const PORT = 4000;

// npm start하면 실행
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);