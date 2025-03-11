import { Request, Response } from 'express';
import { placeTrade, getUserTrades } from '../services/trade';

export const createTrade = async (req: Request, res: Response) => {
    try {
        const data = await placeTrade(req.body.userId, req.body.eventId, req.body.selectedOption, req.body.amount);
        res.json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const fetchUserTrades = async (req: Request, res: Response) => {
    try {
        const data = await getUserTrades(req.params.userId);
        res.json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};