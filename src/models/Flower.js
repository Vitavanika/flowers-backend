import { Schema, model } from 'mongoose';

const flowerSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
    shop: { type: String, required: true },
  },
  { timestamps: true },
);

export const Flower = model('Flower', flowerSchema);
