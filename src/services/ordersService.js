import { Order } from '../models/Order.js';

export const createOrder = async (orderData) => {
  try {
    const order = new Order(orderData);
    return await order.save();
  } catch (err) {
    console.error('Error creating order:', err);
    throw err;
  }
};

export const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id).populate('flowers.flowerId');
    return order;
  } catch (err) {
    console.error('Error fetching order by ID:', err);
    throw err;
  }
};

export const getOrdersByCustomerEmail = async (email) => {
  try {
    return await Order.find({ 'customer.email': email });
  } catch (err) {
    console.error('Error fetching orders by customer email:', err);
    throw err;
  }
};
