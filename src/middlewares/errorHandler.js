import { HttpError } from 'http-errors';
import sendResponse from '../utils/sendResponse.js';

export const errorHandler = (err, req, res) => {
  if (err instanceof HttpError) {
    return sendResponse(res, {
      status: 'error',
      code: err.status,
      message: err.message,
      data: null,
    });
  }

  console.error('Unexpected error:', err);

  return sendResponse(res, {
    status: 'error',
    code: 500,
    message: 'Something went wrong',
    data: null,
  });
};
