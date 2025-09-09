const sendResponse = (
  res,
  { status = 'success', code = 200, message = '', data = null },
) => {
  return res.status(code).json({ status, code, message, data });
};

export default sendResponse;
