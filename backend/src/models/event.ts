import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
    eventName: string;
    category: string;
    startTime: Date;
    status: 'upcoming' | 'live' | 'completed';
    odds: [{ option: string; value: number }];
    createdAt: Date;
    updatedAt: Date;
  }
  
  const EventSchema: Schema = new Schema(
    {
      eventName: { type: String, required: true },
      category: { type: String, required: true },
      startTime: { type: Date, required: true },
      status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
      odds: [{ option: String, value: Number }],
    },
    { timestamps: true }
  );
  
  export default mongoose.model<IEvent>('Event', EventSchema);
  