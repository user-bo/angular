import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  public panTitle: string;

  @ViewChild('dyncomp', {read: ViewContainerRef, static: false})
  dyncomp: ViewContainerRef;

  ngOnInit() {
  }

  sayHi() {
    console.log('hi');
  }
}
