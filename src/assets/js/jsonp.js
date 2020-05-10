import   originJSONP from 'jsonp'

//url拼接  封装的jsonp
export default function  jsonp(url,data,option){
    url +=(url.indexOf('?')<0?'?':'&')+param(data)
    return new Promise((resolve,reject)=>{
        originJSONP(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

//处理参数
function  param(data){
   let  url='';
   for(var k in data){
       let value=data[k]!==undefined?data[k]:''
       // 函数可把字符串作为 URI 组件进行编码。
       url+=`&${k}=${encodeURIComponent(value)}`
   }
   //substring去掉&
   return url?url.substring(1):''
}