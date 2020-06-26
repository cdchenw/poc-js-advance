/**
 * call 改变this 指向 并且调用了一次这个函数
 * 从第二个参数 到之后的参数，就是调用函数的形参的第二个到之后的
 * 
 * apply 改变this 指向，,并且调用了一次这个函数，和call作用基本一致，除了写法不同
 * 第一个参数 this function
 * 第二个参数 是个对象数组 数组第一个参数到最后就是调用函数的 从第二个参数之后到最后的
 */

//  function parent(){
//  };
//  parent.prototype.c = 10;
//  new parent();
//  function child(){
//  }
//  child.prototype = new parent();
//  console.log(new child().c);

// function a(x, y, z){
//     console.log(this, x, z, y);
// }
// a.call(1,2,3,4);

// function a(){
//     this.k = 10;
// }
// function b(){
//     a.call(this);
// }
// console.log(new b().k);

// function a(x, y, z){
//     console.log(this, x, z, y);
// }
// a.apply(1,[2,3,4]);









