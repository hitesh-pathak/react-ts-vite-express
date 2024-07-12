import { Express, Request, Response } from 'express';

const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello from Express');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
