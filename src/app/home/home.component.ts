import { Component, OnInit } from '@angular/core';
import { Vendors } from '../models/models.vendors';
import { VendorsService } from '../services/vendors.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 vendors ?: Vendors[];
  constructor(private vendorservice:VendorsService, private router: Router) { }

  ngOnInit(): void {
    this.vendors = this.vendorservice.onGet();
  }
onSelect(id?: number){
  this.router.navigate(['/add',id])   
}
  onDelete( id? : number){
    this.vendorservice.onDelete(id);
  }
}
