import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = "Hello World";
  intervalSub: any;
  showText: boolean = false;
  todaysDate = new Date();
  itemImageUrl = '../assets/phone.jpg'


  toggleText(): void {
    this.showText = !this.showText;
  }

  getMin(a: number, b: number) {
    if(a < b) {
      return a;
    }

    return b;
  }

  ngOnInit() {
     this.intervalSub = setInterval(() => {
       console.log("Hello")
     }, 10000);
  }

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}
