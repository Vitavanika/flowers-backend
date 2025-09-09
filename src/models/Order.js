import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    flowers: [
      {
        flowerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Flower',
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    totalPrice: Number,
    status: { type: String, default: 'pending' },
  },
  { timestamps: true },
);

export const Order = mongoose.model('Order', orderSchema);
