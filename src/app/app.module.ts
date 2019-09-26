import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './comp/parent/parent.component';
import { ChildComponent } from './comp/child/child.component';
import { DynCompComponent } from './dyn-comp/dyn-comp.component';
import { TplCompComponent } from './dyn-comp/tpl-comp/tpl-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DynCompComponent,
    TplCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  // Angular使用entryComponents来启用“树震动”，即只编译项目中实际使用的组件，而不是编译所有在ngModule中声明但从未使用的组件
  // 定义这个组件时定义应该被编译的组件。对于此处列出的每个组件，Angular将创建一个ComponentFactory并将其存储在ComponentFactoryResolver中。
  // 如果你没有给entryComponents列出一个动态添加的组件，你会得到一个错误消息，因为Angular没有创建一个。
  /* 
  这是用ViewContainerRef.createComponent（）添加的动态添加的组件。将它们添加到entryComponents告诉脱机模板编译器编译它们并为它们创建工厂。

  路由配置中注册的组件也自动添加到entryComponents，因为router-outlet也使用ViewContainerRef.createComponent（）将路由组件添加到DOM。

  离线模板编译器（OTC）只生成实际使用的组件。如果组件不直接用于模板，OTC不知道是否需要编译。有了entryComponents，你可以告诉OTC也编译这些组件，以便在运行时可用。
  */
  entryComponents: [TplCompComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
