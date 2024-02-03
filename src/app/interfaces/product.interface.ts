export interface Product{
  id?: number;
  sku: string;
  name: string;
  shortName: string;
  price: number;
  description?: string;
  image: string;
  category: string;
  //quantity: number;
  createdAtDate: Date;
}