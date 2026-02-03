// Middleware/globalError.js
export const globalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: "Error",
        message: err.message,
        stack: err.stack 
    });
};