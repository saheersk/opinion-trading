import Trade from "../models/trade";
import Event from "../models/event";

export const placeTrade = async (
  userId: string,
  eventId: string,
  selectedOption: string,
  amount: number
) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");
  const trade = await Trade.create({ userId, eventId, selectedOption, amount });
  return { message: "Trade placed successfully", tradeId: trade.id };
};

export const getUserTrades = async (userId: string) => {
  return await Trade.find({ userId }).populate("eventId", "eventName");
};
