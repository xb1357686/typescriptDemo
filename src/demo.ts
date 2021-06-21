function join<T,P>(first:T,second:P){
    return (`${first}$${second}`);
}
join<string,number>("1",2);
join("1",1);  // 会进行类型推断

function map<T>(parmas:Array<T>){
    return parmas;
}
map<string>(["1"]);

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