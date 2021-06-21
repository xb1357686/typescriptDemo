# typescript + node  
1. npm install
2. npm run dev
#### 学习第一天
1.是javascript 的一种超集
##### 基础类型
1. null, number ,undefined,symblo,boolean,void
##### 对象类型
````
1. {name:string},number[],
2. class Person{}; const dell:Person=new Person();
3. const total:()=>number = ()=>{return 123}
````

##### 类型注解
> 我们来告诉TS变量是什么类型


##### 类型推断
> Ts 会自动的尝试推断变量的类型

##### 函数相关的类型
````
function add (a:number,b:number):number{}
function sayHello():void{} // 没有返回值
function errorEmitter():never{   // 不能执行到最后
    throw new Error();
}
function add({first,second}:{first:number,second:number}):number{
    return first + second;
}

````
##### 数组
````
cosnt arr:(number|string)[] = [1,2,'3'];
const stringArr:string[] = ['2'];
const undefinedArr:undefined[] = [undefined];

// type alias 类型别名
type User = {name:string,age:number};
const objectArr:user[]=[{name:'123'}];

class Teacher {name:string,age:number};


````

##### 元组  tuple
````
// 当知道一个数组只有三个值，并且每个值的类型都知道
const arr:[string,number,string]  = ['dell',2,'4']

const array:[string,number] = [
    ["1",2],
    ['4',5],
]
````

##### interface
````
interface Person {
    name:string,
    age?:number   // ? 代表可否传入
    readonly old:number   // 代表只读
    [propName:string]:any,   // 可以接收额外的属性
    say():string    // 需要传入个方法
}
const getPhone = (person:Person):void =>{
    console.log(person.name);
}

getPhone({name:'123',sex:123})
// 如果以字面量的形式传递，会进行强校验，会报错

// 继承
interface Teacher extends Person{
    teach():string;
}

// 定义一个函数
interface SayHi {
    (word:string):string;
}

// 类的继承
class User implements Person {
    name='dell'；
    say(){
        return 'hello'
    }
}

````

##### 访问类型
````
// publice 允许我在类的内外调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
class Person{
    private name:string,
    publice sayHi(){
        console.log('hi');
    }
}
class Person {
    constructor(publice name:string){}
    //类似  this.name = name;
}
class Teacher extends Persopn {
    construtor(publice age:number){
        super();
        // 当子类需要构造器的时候，需要手动调用super 否则会报错
    }
}
````

##### 静态属性
> get set

````
class Person {
constructor(perivate _name:string){};
    get name(){
        return this._name
    }
    set name(name:string){
        this._name = name;
    }
}

cosnt person = New Person('dell');
person.name;
person.name = 'dell less';


// 单例模式

class Demo {
    private static instance:Demo;
    private constructor(){};
    // static 将方法挂在函数本身
    static getInstance(){
        if(!this.instance){
            this.instance = new Demo();
        }
        return this.instance;
    }
}
````

##### 抽象类
> 只能被继承，不能被实例化
````
abstract class Geom {
  abstract getArea():number;
}

// 实例化的函数，需要包含抽象类
````


#### 第三天
##### 枚举类型
````
enum Status {
    one,
    two,
    three,
}
````
##### 函数泛型 generic
````
function join<ABC>(first:ABC,second:ABC){
    return (`${first}$${second}`);
}
join<string>("1","2");

// 类中的泛型

interface Item {
    name:string;
}

class DataManager<T extends Item> {
    constructor(private data:T[]){}
        getItem(index:number):string{
            return this.data[index].name;
        }
}
const data = new DataManager([{name:"dell"}]);
data.getItem(0);

// 如何使用泛型作为一个具体的类型注解
const func:<T>() => string =<T>()=>{
    return '123';
}

````
##### namespace 命名空间

````
namespace Home {
   export class Header {   // 导出class
        constructor(){
            console.log(6);
        }
    }
}
````

##### 描述文件中的全局类型
````
// 定义全局变量
declare var $:(param:()=>void) => void;
// 定义函数
declare function $(params:()=>void):void
````
