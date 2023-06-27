const axios = require('axios');

const url = 'https://data.nasdaq.com/api/v3/datasets/CEPEA/PORK/?limit=100&api_key=AJqswHQAeMfyPJn7N2Dq'

// async function getInfo() {

//     const response = await axios.get(url)
//     // console.log(response.data);

//     const objeto = response.data.dataset.data
//     // console.log(objeto);

//     for (let i = 0; i < objeto.length; i += 1) {
//         const data = objeto[i];

//         for (let o = 1; o < 2; o += 1) {
//             const tratamento = data[o];

//             if (tratamento > 0.50) {
//                 console.log(data[0], tratamento);
//             }

//         }
//     }
// }

// getInfo()


import { GenericFilter } from "./genericFilter";

const filter = new GenericFilter()

filter.getProductByPrice('https://data.nasdaq.com/api/v3/datasets/CEPEA/CALF_C.json/?limit=20&api_key=AJqswHQAeMfyPJn7N2Dq', 0)

// filter.getProductByDaily('https://data.nasdaq.com/api/v3/datasets/CEPEA/SUGAR_c.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 0)

// filter.getProductByMonthy('https://data.nasdaq.com/api/v3/datasets/CEPEA/PORK.json/?&api_key=AJqswHQAeMfyPJn7N2Dq', 1)

