import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Contact } from '../contact';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ProductHandlerService } from '../product-handler.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Product[];
  newCartItems:Product[];
  contact:Contact;
  newContact = new Contact('','','','');

	constructor(public ngxSmartModalService: NgxSmartModalService,
			private productHandlerService:ProductHandlerService,
			private http: HttpClient
			) { }

	ngOnInit() {
	  this.getCartItem();
	}
	getCartItem():void{
		this.cartItems = this.productHandlerService.getCartDetails();
		console.log(this.cartItems)
	}
	deleteConfirm(item:Product):void{
		this.ngxSmartModalService.setModalData(item, 'myModal');
	    this.ngxSmartModalService.getModal('myModal').open();
	}
	removeFromCart(item:Product):void{
		this.newCartItems = this.productHandlerService.getCartDetails();
		this.cartItems = [];
		console.log(item)
		for(var i=0;i<this.newCartItems.length;i++){
			console.log(this.newCartItems[i])
			if(item.sno!=this.newCartItems[i].sno){
				this.cartItems.push(this.newCartItems[i]);
			}
		}
		this.productHandlerService.addToCart(this.cartItems);
		
	}
	validateContactAndPlaceOrder(){
		this.contact = this.productHandlerService.getContact();
		if(!this.contact){
			this.ngxSmartModalService.setModalData(this.newContact, 'contactModal');
			this.ngxSmartModalService.getModal('contactModal').open();
		}else{
			var dataMe = {"cart":this.cartItems,"cust":this.contact};
			return this.http.post("assets/php/place_order.php",dataMe)
             .subscribe(data=>{
				console.log(dataMe);
				window.scrollTo(0, 0);
			});
		}
	}
	placeOrder():void{
		this.productHandlerService.setContact(this.newContact);
		this.validateContactAndPlaceOrder();
	}


}

