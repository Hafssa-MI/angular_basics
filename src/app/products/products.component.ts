import { Component,OnInit } from '@angular/core';
import { NgForOf,NgIf } from '@angular/common';
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
  constructor(){}
  ngOnInit():void{
    this.products=[
      {id:1,name : "Computer" , price : 2300 , selected : true},
      {id:2,name : "Printer" , price : 1200 , selected : false},
      {id:3,name : "Smart Phone" , price : 1100 , selected : true}
      ]
    }
  /*
  products = [
         {id:1,name : "Computer" , price : 2300 , selected : true},
         {id:2,name : "Printer" , price : 1200 , selected : false},
         {id:3,name : "Smart Phone" , price : 1100 , selected : true}]
  */
  handleDelete(product:any):void{
    let v=confirm('etes vous sure de vouloir supprimer?');
    if(v==true){
        this.products=this.products.filter((p:any):boolean=>p.id != product.id);
      }
    }
}
