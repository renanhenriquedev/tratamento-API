const axios = require('axios');
const express = require('express');
import { Request, Response } from 'express';
import { GenericFilter } from './genericFilter';

const app = express();
const filter = new GenericFilter();
app.use(express.json());

app.get('/price', async (req: Request, res: Response) => {
  try {
    const filteredPrice = await filter.getProductByPrice(req);
    res.json(filteredPrice);
  } catch (error) {
    res.status(500).send('Erro ao buscar os preços diários');
  }
});

app.listen(3000, () => {
  console.log('executando na porta 3000');
});

// filter.getProductByPrice('https://data.nasdaq.com/api/v3/datasets/CEPEA/CALF_C.json/?limit=20&api_key=AJqswHQAeMfyPJn7N2Dq', 0)

// filter.getProductByDaily('https://data.nasdaq.com/api/v3/datasets/CEPEA/SUGAR_c.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 0)

// filter.getProductByMonthy('https://data.nasdaq.com/api/v3/datasets/CEPEA/PORK.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 1)

