"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const express = require('express');
const genericFilter_1 = require("./genericFilter");
const app = express();
const filter = new genericFilter_1.GenericFilter();
app.use(express.json());
app.get('/price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filteredPrice = yield filter.getProductByPrice(req);
        res.json(filteredPrice);
    }
    catch (error) {
        res.status(500).send('Erro ao buscar os preços diários');
    }
}));
app.listen(3000, () => {
    console.log('executando na porta 3000');
});
// filter.getProductByPrice('https://data.nasdaq.com/api/v3/datasets/CEPEA/CALF_C.json/?limit=20&api_key=AJqswHQAeMfyPJn7N2Dq', 0)
// filter.getProductByDaily('https://data.nasdaq.com/api/v3/datasets/CEPEA/SUGAR_c.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 0)
// filter.getProductByMonthy('https://data.nasdaq.com/api/v3/datasets/CEPEA/PORK.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 1)
