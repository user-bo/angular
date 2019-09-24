## 模板语法知识点
1.Mustache(八字符)语法；{{变量名}}

   特点
  
   1.可以获取组件内定义的属性值，{{变量名}}

   2.可以进行简单的运算，加减乘除取模，{{1+3}}
  
   3.可以获取函数的返回值，{{getVal()}}
  
2.模板内的局部变量；
  ```
  例子：
  <input #heroInput></input>
  <p>{{heroInput.value}}</p>
  ```
  注意：
  
   如果定义的组件属性与模板的局部变量重名，则优先级顺序为：
  
   模板的局部变量 > 指令中的同名变量 > 组件中的同名属性
  
  
3.绑定

   1.属性绑定 [属性名]

   2.事件绑定 (事件名)

   3.双向绑定 [(属性名)]
   
4.指令(angular一共内置了12个指令)

   1.结构型指令 *ngIf *ngFor ngSwitch

   2.属性型指令 ngClass ngStyle ngModel
   
5.管道 pipe

6.其他。一些小Feature，如安全导航、非空断言

---

  额外知识点：
  
  handlebar模板
  
  react的jsx
  
  angular的管道、指令语法
  
  以上三，都实现了自己的模板“编译器”，也就是模板引擎，所以可以用各样的模板语法
  
---

## 组件间的通讯
1.实现通讯的方式
  1.@input,@output
  2.利用Service单例
  3.利用Cookie/localstorage/Session

1.父子通讯；
  1.直接调用(建议最好不要如此使用，这样会加重父子的耦合度，不利于以后的拆分)
  ```
  // 只能直接调用子组件的public属性和方法
  <app-child #child></app-child>
  <p (click)="child.sayHi()"></p>
  ```
  2.利用@Input和@Output装饰器
  ```
  // 利用@Input，实现父组件向子组件传递参数
  // 实现方式
  // 在子组件内，如下定义一个属性
  @Input()
  public panTitle: string
  // 然后在父组件中，如下调用
  <p>我是父组件</p>
  <app-child panTitle="一个标题"></app-child>

  //@Output的用法自行百度
  ```
2.兄弟通讯、非父子关系通讯
```
   // 利用service实现
   // 1.可以在service内定义一个public属性，然后各个组件都可访问，但这比较粗暴，而且，当属性值发生变化时，调用它的组件不会知道。
   // 2.使用rxjs的Subject。自行百度用法

## 组件的生命周期
1.初始化
2.渲染
3.存活
4.销毁

ngOnChanges>ngOnInit>ngDoCheck>ngAfterContentInit>ngAfterContentCheck>ngAfterViewInit>ngAfterViewChecked>ngOnDestroy

带init的只会执行一次

onpush策略

## 组件动效

## 动态组件

### 细化Demo
组件通讯（父子通讯、兄弟通讯）
