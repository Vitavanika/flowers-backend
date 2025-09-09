import { Order } from '../models/Order.js';

export const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

export const getOrderById = async (id) => {
  return await Order.findById(id).populate('flowers.flowerId');
};

export const getOrdersByCustomerEmail = async (email) => {
  return await Order.find({ 'customer.email': email });
};
