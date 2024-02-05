import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj: Product = {
    _id: '',
    sku: '',
    name: '',
    shortName: '',
    price: 0,
    description: '',
    imageUrl: '',
    category: {
      _id: '',
      name: ''
    },
    createdAtDate: new Date()
  };
  categoriesList: Category[]= [];
  productsList: Product[] = [];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }
 getAllCategories() {
  //debugger;
  this.productService.getAllCategories().subscribe((res: any) => {
    this.categoriesList = res.data;
    //console.log(this.categoriesList)
  })
  }
  onSave(){
    console.log(this.productObj);
    this.productService.createProduct({
      name: this.productObj.name,
      sku: this.productObj.sku,
      shortName: this.productObj.shortName,
      price: this.productObj.price,
      description: this.productObj.description,
      imageUrl: this.productObj.imageUrl,
      category: this.productObj.category
    }).subscribe((res: any)=>{
      this.getAllProducts();
      this.closeSidePanel();
    })
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((res: any)=>{
      this.productsList = res.data;
    })
  }
  onDelete(id: string){
    const isDelete = confirm('Are you sure you want to delete?');
    if (!isDelete) {
      return;
    }
    this.productService.deleteProduct(id).subscribe((res: any)=>{
      this.getAllProducts();
    })
  }
  onEdit(product: Product){
    this.productObj = product;
    this.openSidePanel();
  }

  updateProduct(product: Product) {
    this.productObj = product;
    this.productService.updateProduct(this.productObj).subscribe((res: any) => {
      this.getAllProducts();
      this.closeSidePanel();
    })
  }
  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
    this.productObj = {
      _id: '',
      sku: '',
      name: '',
      shortName: '',
      price: 0,
      description: '',
      imageUrl: '',
      category: {
        name: ''
      },
    };
  }
}

