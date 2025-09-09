import { Flower } from '../models/Flower.js';

export const getAllFlowers = async (filter = {}, sort = {}) => {
  return await Flower.find(filter).sort(sort);
};

export const createFlower = async (flowerData) => {
  const flower = new Flower(flowerData);
  return await flower.save();
};

export const getFlowerById = async (id) => {
  return await Flower.findById(id);
};
