import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CarService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userDetails;
  public carDetails = {
    year: '',
    present_price: '',
    kms_driven: '',
    owner: 0,
    fuel_type: 'Petrol',
    seller_type: 'Individual',
    transmission: 'Manual'
  }
  public fuels = ['Petrol', 'Diesel', 'CNG'];
  public transmissions = ['Manual', 'Automatic'];
  public owners = [0, 1 , 2];
  public sellerTypes = ['Individual', 'Dealer'];

  constructor(
    private router: Router,
    // private api: CarService
  ) {
  }
  // ngOnInit(): void {
  //   const storage = localStorage.getItem('google_auth');

  //   if (storage) {
  //     this.userDetails = JSON.parse(storage);
  //   } else {
  //     this.signOut();
  //   }
  // }

  // signOut(): void {
  //   localStorage.removeItem('google_auth');
  //   this.router.navigateByUrl('/login').then();
  // }

  // onSave() {
  //   this.api.predictCarPrice(this.carDetails).subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
