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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFilter = void 0;
const axios_1 = __importDefault(require("axios"));
class GenericFilter {
    getProductByPrice(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.body.product;
            const response = yield axios_1.default.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`);
            const objeto = response.data.dataset.data;
            const arrayNovo = []; // Declare o array fora do loop
            for (let i = 0; i < objeto.length; i += 1) {
                const data = objeto[i];
                // console.log(data);
                for (let o = 1; o < 2; o += 1) {
                    const tratamento = data[0];
                    // arrayNovo.push(tratamento)
                    if (tratamento > req.body.price) {
                        arrayNovo.push(data[0], tratamento);
                    }
                }
            }
            return arrayNovo;
        });
    }
    getProductByDaily(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.body.product;
            const response = yield axios_1.default.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`);
            const objeto = response.data.dataset.data;
            for (let i = 0; i < objeto.length; i += 1) {
                const data = objeto[i];
                for (let o = 2; o < 3; o += 1) {
                    const tratamento = data[o];
                    if (tratamento > req.body.variationDay) {
                        console.log(data[0], tratamento);
                    }
                }
            }
        });
    }
    getProductByMonthy(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.body.product;
            const response = yield axios_1.default.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`);
            const objeto = response.data.dataset.data;
            for (let i = 0; i < objeto.length; i += 1) {
                const data = objeto[i];
                for (let o = 3; o < 4; o += 1) {
                    const tratamento = data[o];
                    if (tratamento > req.body.variationMonthy) {
                        console.log(data[0], tratamento);
                    }
                }
            }
        });
    }
}
exports.GenericFilter = GenericFilter;
