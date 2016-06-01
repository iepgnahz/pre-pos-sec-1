function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr = [];
  for(var i = 0; i < collection_a.length; i++){
     var s=collection_a[i];
     for(var j = 0; j < collection_b.length; j++){
       if(s == collection_b[j]){
         arr.push(s);
       }
     }
  }
  return arr;
}

module.exports = collect_same_elements;
