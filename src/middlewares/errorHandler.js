import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
  }

  console.error('Unexpected error:', err);

  return res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err?.message || 'Unknown error',
  });
};
