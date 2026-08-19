import express from 'express';
import morgan from 'morgan';

import notFoundMW from './middlewares/notFoundMW.js';
import globalErrorHandling from './middlewares/globalErrorHandling.js';

import userRouter from './Routers/user.router.js';
import postRouter from './Routers/post.router.js';
const app = express();

// set middlewares
app.use(morgan('dev'));
app.use(express.json()); // req.body

// set routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

// not found middleware
app.use(notFoundMW);

// global error handling middleware
app.use(globalErrorHandling);
export default app;

Error;
