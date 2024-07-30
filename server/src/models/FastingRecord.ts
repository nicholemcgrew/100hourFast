import mongoose, { Document, Schema } from 'mongoose';

export interface IFastingRecord extends Document {
  start: Date;
  end: Date;
  userId: mongoose.Types.ObjectId;
}

const FastingRecordSchema: Schema = new Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model<IFastingRecord>('FastingRecord', FastingRecordSchema);
