import * as ordersService from '../services/ordersService.js';
import sendResponse from '../utils/sendResponse.js';

export const createOrder = async (req, res, next) => {
  try {
    const order = await ordersService.createOrder(req.body);
    return sendResponse(res, {
      code: 201,
      message: 'Order created successfully',
      data: order,
    });
  } catch (err) {
    next(err);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await ordersService.getOrderById(req.params.id);
    if (!order) {
      return sendResponse(res, {
        code: 404,
        message: 'Order not found',
      });
    }
    return sendResponse(res, {
      code: 200,
      message: 'Order fetched successfully',
      data: order,
    });
  } catch (err) {
    next(err);
  }
};

export const getOrdersByEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    if (!email) {
      return sendResponse(res, {
        code: 400,
        message: 'Email parameter is required',
      });
    }

    const orders = await ordersService.getOrdersByCustomerEmail(email);
    if (orders.length === 0) {
      return sendResponse(res, {
        code: 404,
        message: 'No orders found for this email',
      });
    }

    return sendResponse(res, {
      code: 200,
      message: 'Orders fetched successfully',
      data: orders,
    });
  } catch (err) {
    next(err);
  }
};
