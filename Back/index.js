import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import cors from 'cors';
import * as path from 'path';
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));
app.use(express.static(path.resolve(__dirname, '../Front/dist')));
app.use(express.json());

app.use(cors());

app.use(router);

app.listen(port, () => {
console.log(`Listening on http://localhost:${port}/`);
});