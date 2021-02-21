import express from "express"; // express 불러오기
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import userRouter from "./routers/userRouter";
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";

const app = express(); // application 만들기(express 실행해서 담기)

// reqest object와 response object를 받는다
const handleHome = (req, res) => res.send("Hello from home~");

const handleProfile = (req,res) => res.send("You are on my Profile");

app.use(cookieParser());
app.use(bodyParser.json());
// form에서 받은 데이터를 서버에서 이해하길 바랄 때
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(helmet());

// create routes
app.use("/", globalRouter);
// 누가 /user에 접속하면 userRouter에 접속하겠다
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;