import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact'

import { NgxSmartModalService } from 'ngx-smart-modal';
import {HttpClient} from "@angular/common/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	model = new Contact('','','','');

	submitted = false;
	
	constructor(private http: HttpClient,public ngxSmartModalService: NgxSmartModalService) {

	}

	ngOnInit() {

	}
	


	contactFivey() { 
	     this.submitted = true; 
		console.log(this.model.name)
		
		var dataMe = {'name':this.model.name,'email':this.model.email,
			    	    			'phone':this.model.phone,'message':this.model.message};
			return this.http.post("assets/php/contact_us.php",dataMe)
             .subscribe(data=>{
				console.log(dataMe);
				window.scrollTo(0, 0);
				this.ngxSmartModalService.setModalData(this.model, 'myModal');
				this.ngxSmartModalService.getModal('myModal').open()
			});
             
	}
	

}
