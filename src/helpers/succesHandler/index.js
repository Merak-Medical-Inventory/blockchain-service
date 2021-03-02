const handleSuccess = (statusCode, message, res, next, data) => {
  res.status(statusCode).send({
    status: 'success',
    statusCode,
    message,
    data: data ? data : null
  });
};

module.exports = {
  handleSuccess
}
