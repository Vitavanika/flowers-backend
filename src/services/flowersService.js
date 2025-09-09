import { Flower } from '../models/Flower.js';

export const getAllFlowers = async (filter = {}, sort = {}) => {
  try {
    return await Flower.find(filter).sort(sort);
  } catch (err) {
    console.error('Error fetching all flowers:', err);
    throw err;
  }
};

export const createFlower = async (flowerData) => {
  try {
    const flower = new Flower(flowerData);
    return await flower.save();
  } catch (err) {
    console.error('Error creating flower:', err);
    throw err;
  }
};

export const getFlowerById = async (id) => {
  try {
    return await Flower.findById(id);
  } catch (err) {
    console.error('Error fetching flower by ID:', err);
    throw err;
  }
};
