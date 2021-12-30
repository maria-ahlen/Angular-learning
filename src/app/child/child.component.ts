import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() childMessage!: string;
  message: string = "Message from child";

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit("Hello from child");
  }

}
