export interface Product{
  _id?: string;
  sku: string;
  name: string;
  shortName: string;
  price: number;
  description?: string;
  imageUrl: string;
  category: {
    _id?: string;
    name: string;
  };
  //quantity: number;
  createdAtDate?: Date;
}