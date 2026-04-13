import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // avec ce root => ce service est disponible pour tous les coposants de l'application , pas associé à un module particulié
})
export class ProductService {
  products=[
        {id:1,name : "Computer" , price : 2300 , selected : true},
        {id:2,name : "Printer" , price : 1200 , selected : false},
        {id:3,name : "Smart Phone" , price : 1100 , selected : true}
        ]
  constructor() { } /* Pour faire l'injection des dépendances */

  getAllProducts():any{
      return this.products;
    }
  deleteProduct(product:any):void{
      this.products=this.products.filter((p:any):boolean=>p.id != product.id);
    }
}
