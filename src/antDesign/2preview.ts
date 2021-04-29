//字符串查找
const nameString:String = "safdzhangoxmev"
console.log(nameString.indexOf('zhang'));//index
console.log(nameString.includes('zhang'));//  boolean

//数组查找
const nameArray:String[]=['zhao', 'qian', 'zhang', 'sun', 'li'];
console.log(nameArray.indexOf('zhang')); //index
console.log(nameArray.includes('zhang')); //boolean
//用于数组和数组内为对象
nameArray.find((value)=>{
    return value==="zhang"
})// first value
nameArray.some((value)=>{
    return value==="zhang"
})//boolean
console.log('------');
const nameObjArray=[{name:'zhao'},{name:'qian'},{name:'zhang'},{name:'sun'}]
nameObjArray.find(function (value) {
    return value.name === 'qian'
});

//对象查找
//Object.keys(object).map/forEach/filter...
