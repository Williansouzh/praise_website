import express, {urlencoded} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRouter from './routes/mainRoutes';
const server = express();
dotenv.config();
server.use(urlencoded({extended: true}));
server.use(cors());
server.use(mainRouter)
server.use((req, res)=>{
    res.json({
        error: 'Page not found'
    })
})
server.listen(process.env.PORT);