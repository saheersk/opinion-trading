import express from 'express';
import authRoutes from './routes/auth';
import eventRoutes from './routes/event';
import connectDB from './config/db';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

connectDB();

export default app;