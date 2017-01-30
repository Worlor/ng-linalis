import { Injectable } from '@angular/core';
import {Product} from "../shared/model/product";
import { Http, Headers, Response } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

  private url: string = "https://randomuser.me/api/?results=10";
  /*products: Product[] = [
  {id:1,title:"Produit 1",rating: 2,imageUrl: "", description:"Description produit 1", price: 12},
  {id:2,title:"Produit 2", rating:3,imageUrl:  "", description:"Description produit 2", price: 12}
];*/

  constructor( private http: Http) {}

  getProducts():Observable<Product[]> {
    return this.http.get(this.url).map(
      (r:Response) => <Product[]> r.json().results
    );
  }

/*  getProduct(id:number):Promise<Product> {
    return this.getProducts().map(products => products.find(product => product.id === id));
  }*/


}
