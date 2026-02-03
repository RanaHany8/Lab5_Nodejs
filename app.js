import express from 'express';
import { dbConnection } from './Database/dbConnection.js';
import userRouter from './Modules/User/user.routes.js';
import noteRouter from './Modules/Note/note.routes.js';
import { AppError } from './utils/AppError.js';
import { globalError } from './Middleware/globalError.js';

const app = express();
app.use(express.json());


dbConnection();


app.use('/auth', userRouter);
app.use('/notes', noteRouter);

app.use("*", (req, res, next) => {
    next(new AppError(`Route not found: ${req.originalUrl}`, 404));
});


app.use(globalError);

app.listen(3000, () => console.log("Server is running on port 3000"));