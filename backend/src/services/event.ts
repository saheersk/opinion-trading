import Event from '../models/event';

export const getAllEvents = async () => {
    return await Event.find();
};

export const createEvent = async (eventData: any) => {
    const event = new Event(eventData);
    await event.save();
    return { message: 'Event created successfully', eventId: event.id };
};