// const asyncHandler = (fn) => async (err, req, res, next) => {
//   try {
//     await fn(err, req, res, next);
//   } catch (err) {
//     console.log("Error in asyncHandler ", err);
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

const asyncHandler = (fn) => {
  (err, req, res, next) => {
    Promise.resolve(fn(err, req, res, next)).catch((err) => next(err));
  };
};
