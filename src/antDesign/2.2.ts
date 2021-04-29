import {lodash} from "lodash"
interface SomeType{
    [key:string]:string
}

const SomeObj:SomeType={
    name1:'zhao',
    name2:'qian',
}

const SomeObj2:Record<string,unknown>={
    name1:'qian',
    name2:26,
}
//never 空值 什么都不是
const SomeObj3:Record<string,never>={

}
//null
const SomeObj4:Record<string,null>={ 
    name1:null
}