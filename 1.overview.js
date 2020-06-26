
/**
 * 1.万物皆是对象
 * 1）字面量 - 字面上显示的东西就叫字面量
 * 2）包装类 - 没有new的函数声明的就是包装类
 * 
 * 2. 什么是对象
 * 1）只要是对象就可以有自己的私有属性
 * 2）只要是new出来的都是对象
 * 3) 不同对象肯定是不会相等的
 * 4) 对象都会有引用机制. *如果不想引用就重新赋值 / 
 * 
 * 
 * 数据类型
 * undefined, null, Boolean, String, Number, Object
 * 
 * 
 * 3.内存机制
 * 1) 回收机制
 * 2) 生命周期
 */

// var a = 'abc';
// var b = new String('abc');
// var c = String('abc');
// console.log(typeof a); //string
// console.log(typeof b); //object
// console.log(typeof c); //string


// var a = 'abc';
// var b = new String('abc');
// console.log(a==b);  //true

// var a = new String('abc');
// var b = new String('abc');
// console.log(a==b);  //false

// var a = [1, 2, 3];
// var b = a;
// b.push(4);
// console.log(a); //1,2,3,4

// var a = {};
// var b = a;
// b.c = 10;
// console.log(a); //{c:10}

// var a = { b: 10};
// delete a.b;
// console.log(a);
// a = null;
// console.log(a);

// var arr2 = [1,2,3];
// function show(arr){  //arr指向arr2对象的地址，
//     arr.push(1);
// }
// show(arr2);
// console.log(arr2); //[1,2,3,4]

// var a = [1,2,3];
// var b = a;
// a = [2,3,4];
// b.push(5);
// console.log(a); //[2,3,4]




