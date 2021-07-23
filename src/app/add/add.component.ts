import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Vendors } from '../models/models.vendors';
import { VendorsService } from '../services/vendors.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id ?: number;
  header ?: string;
  vendor ?:any = {
    id: '',
    name: '',
    type: '',
    email: ''

  }

  constructor(private router: Router ,private route: ActivatedRoute, private vendorService: VendorsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.header = this.id === 0? 'Add Vendor' : 'Edit Vendor';
     
    if(this.id !=0){
      this.vendor = this.vendorService.onGetVendor(this.id)
    }
  }
  onSubmit(form: NgForm){
    let vendor: Vendors ={
      id:form.value.id,
      name:form.value.name,
      type:form.value.type,
      email:form.value.email
    } 
    if(this.id === 0)
    this.vendorService.onAdd(vendor);
    else
    this.vendorService.update(vendor);
    this.router.navigateByUrl('');
  }
}
