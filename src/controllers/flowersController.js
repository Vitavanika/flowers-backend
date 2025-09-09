import * as flowersService from '../services/flowersService.js';
import sendResponse from '../utils/sendResponse.js';

export const getFlowers = async (req, res, next) => {
  try {
    const { sort } = req.query;
    let sortOptions = {};
    if (sort === 'price') {
      sortOptions.price = 1;
    } else if (sort === 'date') {
      sortOptions.createdAt = -1;
    }

    const flowers = await flowersService.getAllFlowers({}, sortOptions);
    return sendResponse(res, {
      code: 200,
      message: 'Flowers fetched successfully',
      data: flowers,
    });
  } catch (err) {
    next(err);
  }
};

export const createFlower = async (req, res, next) => {
  try {
    const flower = await flowersService.createFlower(req.body);
    return sendResponse(res, {
      code: 201,
      message: 'Flower created successfully',
      data: flower,
    });
  } catch (err) {
    next(err);
  }
};
