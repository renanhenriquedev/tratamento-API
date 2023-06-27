import { IGenericFilter } from "./IGenericFilter";
import axios from 'axios';

export class GenericFilter<T> implements IGenericFilter<void> {

    async getProductByPrice(url: string, price: number): Promise<void> {

        const response = await axios.get(url)
        // console.log(response.data);

        const objeto = response.data.dataset.data
        // console.log(objeto);
        const arrayNovo: string[] = []; // Declare o array fora do loop
        
        
        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];
            // console.log(data);
            
            
            for (let o = 1; o < 2; o += 1) {
                const tratamento = data[0];
                arrayNovo.push(tratamento)
                

                if (tratamento > price) {
                    // console.log(data[0], tratamento);
                }

            }
        }
        console.log(arrayNovo);
        
    }

    async getProductByDaily(url: string, variation: number): Promise<void> {

        const response = await axios.get(url)
        const objeto = response.data.dataset.data

        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];

            for (let o = 2; o < 3; o += 1) {
                const tratamento = data[o];

                if (tratamento > variation) {
                    console.log(data[0], tratamento);
                }

            }
        }
    }

    async getProductByMonthy(url: string, variation: number): Promise<void> {

        const response = await axios.get(url)
        const objeto = response.data.dataset.data

        for (let i = 0; i < objeto.length; i += 1) {
            const data = objeto[i];

            for (let o = 3; o < 4; o += 1) {
                const tratamento = data[o];

                if (tratamento > variation) {
                    console.log(data[0], tratamento);
                }

            }
        }

    }

}