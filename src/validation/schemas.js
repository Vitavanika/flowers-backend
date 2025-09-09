import Joi from 'joi';

// Схема для валідації даних квітки
export const createFlowerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
  }),
  description: Joi.string().allow(''),
  price: Joi.number().positive().required().messages({
    'any.required': 'Price is required.',
    'number.positive': 'Price must be a positive number.',
  }),
  image: Joi.string().uri().required().messages({
    'any.required': 'Image is required.',
    'string.uri': 'Image must be a valid URL.',
  }),
  shop: Joi.string().required().messages({
    'any.required': 'Shop is required.',
  }),
});

// Схема для валідації даних замовлення
export const createOrderSchema = Joi.object({
  flowers: Joi.array()
    .items(
      Joi.object({
        flowerId: Joi.string().required(),
        quantity: Joi.number().min(1).default(1),
      }),
    )
    .min(1)
    .required()
    .messages({
      'array.min': 'Order must contain at least one flower.',
      'any.required': 'Flowers are required.',
    }),
  customer: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  })
    .required()
    .messages({
      'any.required': 'Customer information is required.',
    }),
  totalPrice: Joi.number().positive().required().messages({
    'any.required': 'Total price is required.',
  }),
});
