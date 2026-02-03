import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/noteAppIntake46')
        .then(() => console.log('Database Connected Successfully'))
        .catch((err) => console.log('Database Error', err));
};