import express from 'express';

const app = express();

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

const PORT = 8000;

app.listen(PORT, () => {
  `🚀 Server Running on PORT :: ${PORT} 🚀`;
});
