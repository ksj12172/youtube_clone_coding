import express from "express"; // express 불러오기
const app = express(); // application 만들기(express 실행해서 담기)

const PORT = 4000;

// npm start하면 실행
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

// reqest object와 response object를 받는다
const handleHome = (req, res) => res.send("Hello from home~");

const handleProfile = (req,res) => res.send("You are on my Profile");

// create routes
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);