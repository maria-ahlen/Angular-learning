import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: any;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: string) {
    console.log(msg);
  }
  
  ngAfterViewInit() {
    console.log(this.child.message);
  }
}
