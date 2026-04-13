import { Component,OnInit } from '@angular/core';
import { NgForOf,NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone :true
})
export class ProductsComponent implements OnInit{
  /* products! : Array<any>;  demander à l'interpreteur à ne pas mettre attention à l'initialisation de la variable avec le ! */
  products : any
  /*PAs besoin de la décalaration ou l'initialisation du variable Product Service */
  constructor(private productService : ProductService){
    }
  ngOnInit():void{
    /*this.products=[
      {id:1,name : "Computer" , price : 2300 , selected : true},
      {id:2,name : "Printer" , price : 1200 , selected : false},
      {id:3,name : "Smart Phone" , price : 1100 , selected : true}
      ] Ca sera traité dans le service*/
  this.getAllProducts();
    }
  getAllProducts():void{
      this.products=this.productService.getAllProducts();
    }
  handleDelete(product:any):void{
      let v=confirm('etes vous sure de vouloir supprimer?');
      if(v==true){
        this.productService.deleteProduct(product);
        this.getAllProducts();
        }
      }



}
