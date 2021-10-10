function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  return res
    .status(statusCode)
    .json({
      success: false,
      message: err.message,
      stack: err.stack
    });

};

module.exports = errorHandler;
