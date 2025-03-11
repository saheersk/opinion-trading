import express from 'express';
import authRoutes from './routes/auth';
import connectDB from './config/db';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();

export default app;