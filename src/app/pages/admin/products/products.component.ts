import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;
  productObj: Product = {
    sku: '',
    name: '',
    shortName: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    createdAtDate: new Date()
  };
  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}

