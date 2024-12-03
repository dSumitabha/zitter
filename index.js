import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

// Demo API route
app.get('/api/demo', (req, res) => {
  const sampleData = {
    message: 'This is a demo API response.',
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: 'Item One' },
      { id: 2, name: 'Item Two' },
    ],
  };
  res.json(sampleData);
});

app.get('/api/saikat', (req, res) => {
  const demoData = {
    message : 'Namaste Bharat.',
    timestamp : new Date().toISOString(),
  }
  res.json(demoData)
})

const port = parseInt(process.env.PORT) || 3033;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});