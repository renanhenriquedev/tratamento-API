export interface IGenericFilter<T> {

    getProductByPrice(url: string, price: number): Promise<void>;
    getProductByDaily(url:string, variation: number): Promise<void>;
    getProductByMonthy(url: string, variation: number): Promise<void>;

}