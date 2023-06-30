import { Request } from 'express';

export interface IGenericFilter<T> {

    getProductByPrice(req: Request): Promise<string[]>;
    getProductByDaily(req: Request): Promise<string[]>;
    getProductByMonthy(req: Request): Promise<void>;

}

