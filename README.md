## 模板语法知识点
1.Mustache(八字符)语法；{{变量名}}
  特点
  1.可以获取组件内定义的属性值，{{变量名}}
  2.可以进行简单的运算，加减乘除取模，{{1+3}}
  3.可以获取函数的返回值，{{getVal()}}
2.模板内的局部变量；
  例子：
  <input #heroInput></input>
  <p>{{heroInput.value}}</p>
  (如果定义的组件属性与模板的局部变量重名，则优先级顺序为：模板的局部变量 > 指令中的同名变量 > 组件中的同名属性)
3.
属性绑定 [属性名]
事件绑定 (事件名)
双向绑定 [(属性名)]
4.指令(angular一共内置了12个指令)
结构型指令 *ngIf *ngFor ngSwitch
属性型指令 ngClass ngStyle ngModel
5.管道 pipe
6.其他。一些小Feature，如安全导航、非空断言

(
  额外知识点：
  handlebar模板
  react的jsx
  angular的管道、指令语法
  以上三，都实现了自己的模板“编译器”，也就是模板引擎，所以可以用各样的模板语法
)

## 组件间的通讯
1.实现通讯的方式
  1.@input,@output
  2.利用Service单例
  3.利用Cookie/localstorage/Session

### 细化Demo
组件通讯（父子通讯、兄弟通讯）
