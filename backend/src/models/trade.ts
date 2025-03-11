import mongoose, { Schema, Document } from 'mongoose';

export interface ITrade extends Document {
    userId: string;
    eventId: string;
    selectedOption: string;
    amount: number;
    status: 'pending' | 'won' | 'lost';
    createdAt: Date;
  }
  
  const TradeSchema: Schema = new Schema(
    {
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
      selectedOption: { type: String, required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ['pending', 'won', 'lost'], default: 'pending' },
    },
    { timestamps: true }
  );
  
  export default mongoose.model<ITrade>('Trade', TradeSchema);
  