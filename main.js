//position changed

function main(a){
  var index=0;
  var increment=0
  for(i=0;i<a.length;i=index){
    if(a.length>=a[increment]){
      index=a[increment]
    }
    increment++
  }
  var lastvalue=a.pop(); 
  if(index==lastvalue) return true
     return false
}
console.log(main([1,3,4,6,2,5,7,8,9]))
console.log(main([1,6,7,5,6,11]))
