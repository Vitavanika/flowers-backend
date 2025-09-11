import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    flowers: [
      {
        flowerId: {
          type: Schema.Types.ObjectId,
          ref: 'Flower',
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
    totalPrice: Number,
    status: { type: String, default: 'pending' },
  },
  { timestamps: true },
);

export const Order = model('Order', orderSchema);
