import { IGenericFilter } from "./IGenericFilter";
import axios from 'axios';
import { Request } from 'express';


export class GenericFilter<T> implements IGenericFilter<void> {

    async getProductByPrice(req: Request): Promise<string[]>  {

        console.log(req.body);
        

        const product = req.body.product as string

        const response = await axios.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`)

        const objeto = response.data.dataset.data

        // console.log('objeto', objeto);
        

        const arrayNovo: string[] = []; // Declare o array fora do loop
        
        
        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];
            // console.log(data);
            // console.log('data', data);
            
            
            for (let o = 1; o < 2; o += 1) {
                const tratamento = data[1];
                // arrayNovo.push(tratamento)
                

                if (tratamento > req.body.price) {                    
                    arrayNovo.push(data[0], tratamento);
                }

            }
        }        
        return arrayNovo;
        
    }

    async getProductByDaily(req: Request): Promise<string[]> {

        const product = req.body.product as string


        const response = await axios.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`)
        const objeto = response.data.dataset.data

        const arrayNovo: string[] = []; 

        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];

            for (let o = 2; o < 3; o += 1) {
                const tratamento = data[o];

                if (tratamento > req.body.variationDay) {
                    arrayNovo.push(data[0], tratamento);
                }

            }
        }

        return arrayNovo

    }

    async getProductByMonthy(req: Request): Promise<void> {

        const product = req.body.product as string


        const response = await axios.get(`https://data.nasdaq.com/api/v3/datasets/CEPEA/${product}.json/?&api_key=AJqswHQAeMfyPJn7N2Dq`)
        const objeto = response.data.dataset.data

        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];

            for (let o = 3; o < 4; o += 1) {
                const tratamento = data[o];

                if (tratamento > req.body.variationMonthy) {
                    console.log(data[0], tratamento);
                }

            }
        }

    }

}