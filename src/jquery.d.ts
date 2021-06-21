// 定义全局变量
declare var $:(param:()=>void) => void;
//定义全局函数
declare function $(params:()=>void):void

interface JqueryInstance {
    html:(html:string) =>JqueryInstance;
}