exports.getAllUsers = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      data: []
    }
  });
};
