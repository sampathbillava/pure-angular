import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-test-features',
  templateUrl: './test-features.component.html',
  styleUrls: ['./test-features.component.css']
})
export class TestFeaturesComponent implements OnInit {

  subject$ = new BehaviorSubject("0");
  subjectRelay$ = new ReplaySubject();
  subjectAsync$ = new AsyncSubject();
  constructor() { }

  ngOnInit(): void {
  }
  onBehaviorSubjectClick() {

    //this.subject$.next("this will also come");

    this.subject$.subscribe(val => {
      console.log("Sub1 " + val); // this will be called on call of next
    });

    
    this.subject$.next("2");
 
    this.subject$.subscribe(val => {
      console.log("sub2 " + val);
    });
 
    this.subject$.next("3"); // this will come twice because subject$ is subscribed 2 times 

    this.subject$.complete();
  }

  onRelaySubjectClick() {
    this.subjectRelay$.next("1");
    this.subjectRelay$.next("2");

    
    this.subjectRelay$.subscribe(
      val => console.log("Sub1 " + val),
      err => console.error("err Sub1 " + err),
      () => console.log("Sub1 Complete")
    );
 
    this.subjectRelay$.next("3");
    this.subjectRelay$.next("4");
 
    this.subjectRelay$.subscribe(val => {
      console.log("sub2 " + val);
    });
 
    this.subjectRelay$.next("5");
    this.subjectRelay$.complete(); // won't take any "next()" after this!
 
    //this.subjectRelay$.error("err message from this line");
    this.subjectRelay$.next("6");
 

    //Now, we subscribe again. The subscriber will receive all the values up to Complete. 
    //But will not receive the Complete notification, instead, it will receive the Error notification.
    this.subjectRelay$.subscribe(
      val => {
        console.log("sub3 " + val);
      },
      err => console.error("err sub3 " + err),
      () => console.log("Complete")
    );
  }

  onAsyncSubjectClick() {
    this.subjectAsync$.next("1");
    this.subjectAsync$.next("2");
 
    this.subjectAsync$.subscribe(
      val => console.log("Sub1 " + val),
      err => console.error("Sub1 " + err),
      () => console.log("Sub1 Complete")
    );
 
    this.subjectAsync$.next("3");
    this.subjectAsync$.next("4");
 
    this.subjectAsync$.subscribe(val => {
      console.log("sub2 " + val);
    });
    
    //All the subscribers will receive the value 5 including those who subscribe after the complete event.
    //But if the AsyncSubject errors out, then all subscribers will receive an error notification 
    //and no value.
    this.subjectAsync$.next("5");
    
    this.subjectAsync$.complete();
 
    this.subjectAsync$.error("err");
 
    this.subjectAsync$.next("6");
 
    this.subjectAsync$.subscribe(
      val => console.log("Sub3 " + val),
      err => console.error("sub3 " + err),
      () => console.log("Sub3 Complete")
    );
  }

}
