import { Injectable } from '@angular/core';
import { Vendors } from '../models/models.vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
   vendors : Vendors[] =[
     {
       id: 1,
       name: "Alex",
       type: "finance",
       email: "alex_01@gmail.com"
     },
     {
      id: 2,
      name: "Ben",
      type: "transport",
      email: "ben_02@gmail.com"
    },
    {
      id: 3,
      name: "charlie",
      type: "payment",
      email: "charlie_03@gmail.com"
    }
   ];
  constructor() {
   }
   onGet(){
    return this.vendors;
  }
  onGetVendor(id: number){
    return this.vendors.find(x => x.id === id)
  }
  onAdd(vendor : Vendors){
    this.vendors.push(vendor);
    console.log(this.vendors);
  }

  onDelete(id? : number){
    let vendor = this.vendors.find(x=> x.id === id);
    let index = this.vendors.findIndex(vnd => vnd === vendor)
    this.vendors.splice(index,1)
  }
  update (vendor : Vendors){
    let old: any= this.vendors.find(x => x.id === vendor.id)
    old.id = vendor.id;
    old.name = vendor.name;
    old.type = vendor.type;
    old.email = vendor.email;
  }
}
