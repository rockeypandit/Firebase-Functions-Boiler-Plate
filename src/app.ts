import * as express from 'express';
import * as bodyParser from 'body-parser';
import { authRoutes } from './routes/authRoutes';
// import { userRoutes } from './routes/userRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', authRoutes);
// app.use('/api/v1', userRoutes);

export default app;