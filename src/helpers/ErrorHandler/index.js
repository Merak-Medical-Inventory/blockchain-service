class ErrorHandler extends Error {
  statusCode;
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err , res) => {
  const { message } = err;
  const statusCode = err.statusCode ? err.statusCode : 500;
  console.log('handleError -> err.statusCode', err.statusCode)

  res.status(statusCode).json(
    {
      status: 'error',
      statusCode,
      message
    }
  );
};

module.exports = {
  ErrorHandler,
  handleError
}
