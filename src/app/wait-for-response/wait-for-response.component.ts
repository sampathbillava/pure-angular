import { Component, OnInit } from '@angular/core';
import { WaitForResponseService } from './service/wait-for-response.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-wait-for-response',
  templateUrl: './wait-for-response.component.html',
  styleUrls: ['./wait-for-response.component.css']
})
export class WaitForResponseComponent implements OnInit {

  constructor(private waitForResponseService: WaitForResponseService) { }

  ngOnInit(): void {
    this.testmethod();
  }

  // forkJoin(
  //   this.data.getCodes('medical'),
  //   this.data.getCodes('delay'),
  //   this.data.getCodes('disability'),
  //   this.data.getCodes('district'),
  // ).subscribe(([medicalData, delayData, disabilityData, districtData]) => {
  //   this.Medical = medicalData;
  //   this.Delays = delayData;
  //   this.Disability = disabilityData;
  //   this.District = districtData;
  
  //   // make your last http request here.
  // });

  

  testmethod() {
    let observable = forkJoin({
      foo: this.waitForResponseService.API1(),
      bar: this.waitForResponseService.API2(),
      //baz: this.waitForResponseService.API3()
    });
    observable.subscribe((value: any) => {
      if (value.foo != null) {
        this.callMainAPI();
      }
    });
  }

  callMainAPI() {
    this.waitForResponseService.API3().subscribe((value: any) => {
      let x = value;
    }) 
  }

  

}
