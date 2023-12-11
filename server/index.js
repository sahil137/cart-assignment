import express from 'express';
import routes from './routes/index.routes.js';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

app.use('/', routes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT :: ${PORT} 🚀`);
});
