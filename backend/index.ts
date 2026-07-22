import express, { type Request, type Response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { pool } from './db/db.js';

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
    res.json({
        success: true,
        page: 'landing',
        message: 'Welcome to iQ&A',
    });
});

app.post('/register', (_req: Request, _res: Response) => {

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});