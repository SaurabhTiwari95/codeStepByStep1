import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(
    private seller : SellerService,
    private router : Router,
  ) { }

  ngOnInit():void {}

  signUp(data:signUp):void{
    // console.warn(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.router.navigate(['seller-home'])
      }
    });
  }

}
