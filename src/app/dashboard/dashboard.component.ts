import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
  public owners = [0, 1, 2];
  public sellerTypes = ['Individual', 'Dealer'];
  public predictedPrice = '';

  constructor(
    private router: Router,
    private api: CarService
  ) {
  }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

  onSave() {
    this.predictedPrice = '';
    this.api.predictCarPrice(this.carDetails).subscribe(res => {
      console.log(res);
      if (res.status == 'Success') {
        this.predictedPrice = res.price;
        alert('The predicted value of car is ' + this.predictedPrice + ' Lacs.');
      }
      else {
        alert('Some error occurred.');
      }
    },
      error => {
        alert('Some error occurred.');
      })
  }

  refreshForm() {
    this.predictedPrice = '';
    this.carDetails = {
      year: '',
      present_price: '',
      kms_driven: '',
      owner: 0,
      fuel_type: 'Petrol',
      seller_type: 'Individual',
      transmission: 'Manual'
    }
    window.location.reload();
  }

}
