// import Trade from "../models/trade";
// import Event from "../models/event";

// export const placeTrade = async (
//   userId: string,
//   eventId: string,
//   selectedOption: string,
//   amount: number
// ) => {
//   const event = await Event.findById(eventId);
//   if (!event) throw new Error("Event not found");
//   const trade = await Trade.create({ userId, eventId, selectedOption, amount });
//   return { message: "Trade placed successfully", tradeId: trade.id };
// };

// export const getUserTrades = async (userId: string) => {
//   return await Trade.find({ userId }).populate("eventId", "eventName");
// };

import Trade from "../models/trade";
import { io } from "../websockets/socket";

export const placeTrade = async (
  userId: string,
  eventId: string,
  selectedOption: string,
  amount: number
) => {
  const trade = await Trade.create({ userId, eventId, selectedOption, amount });

  io.emit("trade-update", {
    tradeId: trade.id,
    userId: trade.userId,
    eventId: trade.eventId,
    selectedOption: trade.selectedOption,
    amount: trade.amount,
    status: trade.status,
  });

  return { message: "Trade placed successfully", tradeId: trade.id };
};
