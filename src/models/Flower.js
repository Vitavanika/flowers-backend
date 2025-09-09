import mongoose from 'mongoose';

const flowerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
    shop: { type: String, required: true },
  },
  { timestamps: true },
);

export const Flower = mongoose.model('Flower', flowerSchema);
