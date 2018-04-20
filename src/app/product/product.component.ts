import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ProductHandlerService } from '../product-handler.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	products:Product[];
	newProducts:Product[];
	added:boolean;
  constructor(public ngxSmartModalService: NgxSmartModalService,
				private productHandlerService:ProductHandlerService) { }

  ngOnInit() {
	  this.getProducts();
  }
  
  getProducts(): void {
	this.productHandlerService.getProductsFromService().subscribe((products:Product[]) =>{
		console.log(products)
		this.products = products;
	});
  }
  

	
  addToList(product:Product): void {
	  
	  this.ngxSmartModalService.setModalData(product, 'myModal');
	  this.ngxSmartModalService.getModal('myModal').open();
	  console.log(product);
	  
	  if(!this.productHandlerService.getCartDetails()){
		    product.sno=1;
			this.newProducts = [product];
	  }else{
		    this.newProducts = this.productHandlerService.getCartDetails();
			for(var i =0;i<this.newProducts.length;i++){
				if(this.newProducts[i].pid==product.pid){
					this.added=true;
					this.newProducts[i].quantity=this.newProducts[i].quantity+product.quantity;
				}
			}
			if(!this.added){
					product.sno=this.newProducts.length+1; 
					this.newProducts.push(product);
			}				
	  }
			this.productHandlerService.addToCart(this.newProducts);

  }

}
