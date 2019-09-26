import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tpl-comp',
  templateUrl: './tpl-comp.component.html',
  styleUrls: ['./tpl-comp.component.scss']
})
export class TplCompComponent implements OnInit {

  @Input()
  public title:string="默认的标题";

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent():void{
    this.btnClick.emit("第一个子组件的点击事件...");
  }

}
