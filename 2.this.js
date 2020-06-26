

/**
 *  1. 在普通函数下，this指向window(browser情况下)
 *  2. 有事件源的情况下 指向 事件源
 *  3. 在定时器下 this也指向window(browser情况下), 除了es6语法
 *  4. 在对象下 this指向当前对象本身
 */
// function a(){
//     console.log(this);
// }
// a();

// function b(){
//     setTimeout(() => {
//         console.log(this);
//     }, 100);
// }
// b();
// ;

// var json = {
//     a: function(){
//         console.log(this);
//     }
// }
// json.a();

// var a = [1,2,3];
// a.b = function(){
//     this.push(10);
//     console.log(this);
// }
// a.b();


