import { Component, OnInit, Input ,DoCheck} from '@angular/core';
import { Product } from './product';
import { ProductHandlerService } from './product-handler.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  @Input() cartLength:number =  this.productHandlerService.getCartLength();
  isNavbarCollapsed = true;
  lat: number = 12.7123398;
  lng: number = 77.80034;
  constructor(private productHandlerService:ProductHandlerService) {
	  
  }
	ngOnInit() 
	{
		console.log('hi')
	  //this.getCartLength();
	}
	
	
	ngDoCheck() {
		if(this.cartLength != this.productHandlerService.getCartLength()){
			this.cartLength = this.productHandlerService.getCartLength();
		}
	}
  

}
