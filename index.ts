import express, {Express, Request, Response} from "express";
import stringsController from "./controllers/strings";
import randomController from "./controllers/random";
import mongoose from "mongoose";
import ArticleController from "./controllers/articleController";
import commentController from "./controllers/commentController";


const app: Express = express();
app.use(express.json());

mongoose.connect("mongodb+srv://markospaltser:gqNkzVIdEupFmQQp@cluster0.4fbofow.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/', randomController);
app.use('/', stringsController);
app.use('/', ArticleController);
app.use('/', commentController);

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});