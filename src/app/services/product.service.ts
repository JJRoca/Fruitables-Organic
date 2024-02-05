import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant/constant';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
    return this.httpClient.get(Constant.API_URL + '/category',);
  }

  //Retrieve all products
  getAllProducts() {
    return this.httpClient.get(Constant.API_URL + '/product')
  }

  createProduct(product: Product) {
    return this.httpClient.post(Constant.API_URL + '/product/createProduct', product);
  }
  updateProduct(product: Product ) {
    return this.httpClient.put(Constant.API_URL + '/product/updateProduct/' + product._id, product);
  }
  deleteProduct(id: string){
    return this.httpClient.delete(Constant.API_URL + '/product/' + id);

  }
}
