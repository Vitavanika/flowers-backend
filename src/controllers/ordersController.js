import * as ordersService from '../services/ordersService.js';
import sendResponse from '../utils/sendResponse.js';
import { Order } from '../models/Order.js';
import { Flower } from '../models/Flower.js';

export const createOrder = async (req, res) => {
  try {
    const { customer, flowers } = req.body;
    const flowerIds = flowers.map((item) => item.flowerId);
    const flowerDetails = await Flower.find({ _id: { $in: flowerIds } }).select(
      'name price image',
    );

    let totalPrice = 0;
    const flowersForOrder = [];

    for (const item of flowers) {
      const flower = flowerDetails.find(
        (d) => d._id.toString() === item.flowerId,
      );
      if (!flower) {
        return sendResponse(res, {
          code: 404,
          message: `Flower with ID ${item.flowerId} not found.`,
        });
      }
      totalPrice += flower.price * item.quantity;
      flowersForOrder.push({
        flowerId: flower._id,
        quantity: item.quantity,
      });
    }

    const newOrder = new Order({
      customer,
      flowers: flowersForOrder,
      totalPrice,
    });

    const savedOrder = await newOrder.save();

    const populatedOrder = await Order.findById(savedOrder._id).populate({
      path: 'flowers.flowerId',
      select: 'name price image',
    });

    return sendResponse(res, {
      code: 201,
      message: 'Order created successfully',
      data: populatedOrder,
    });
  } catch (error) {
    return sendResponse(res, {
      code: 400,
      message: 'Failed to create order',
      error: error.message,
    });
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
