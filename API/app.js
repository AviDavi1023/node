import express from 'express';
import cors from 'cors';

import manufacturerRoutes from './routes/manufacturer-routes.js';
import airplaneRoutes from './routes/airplane-routes.js';

const app = express();

app.use(cors());
app.use(express.json()); // for JSON

app.use('/api/airplane', airplaneRoutes);
app.use('/api/manufacturer', manufacturerRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});