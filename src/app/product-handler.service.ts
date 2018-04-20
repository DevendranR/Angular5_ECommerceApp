import { Injectable,Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Product } from './product'
import { Contact } from './contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductHandlerService {
  
  constructor(
	@Inject(SESSION_STORAGE) private storage: WebStorageService,
	private http: HttpClient
	){}
	
	sessionList:Product[];
	
  getCartLength():number{
	 this.sessionList = this.storage.get('list');
	 if(this.sessionList){
		return this.sessionList.length;
	 }
	 return 0;
  }
  getCartDetails():Product[]{
	 this.sessionList = this.storage.get('list');
	 return this.sessionList;
  }
  addToCart(cartItems):void{
	this.storage.set('list',cartItems);
  }
    getProductsFromService(): Observable<Product[]>{
        return this.http.get('assets/json/products.json').map(res=>this.sessionList=res["products"]);
    }
	
	getContact():Contact{
		return this.storage.get('contact');
	}
	setContact(details:Contact):void{
		return this.storage.set('contact',details);
	}
}
