import { Request, Response } from 'express';
import { getAllEvents, createEvent } from '../services/event';

export const fetchEvents = async (req: Request, res: Response) => {
    try {
        const events = await getAllEvents();
        res.json(events);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const addEvent = async (req: Request, res: Response) => {
    try {
        const data = await createEvent(req.body);
        res.json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
