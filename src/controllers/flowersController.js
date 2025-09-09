import * as flowersService from '../services/flowersService.js';

export const getFlowers = async (req, res, next) => {
  try {
    const flowers = await flowersService.getAllFlowers();
    res.json(flowers);
  } catch (err) {
    next(err);
  }
};

export const createFlower = async (req, res, next) => {
  try {
    const flower = await flowersService.createFlower(req.body);
    res.status(201).json(flower);
  } catch (err) {
    next(err);
  }
};
