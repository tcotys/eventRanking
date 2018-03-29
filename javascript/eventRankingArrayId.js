eventRanking.getNewId = function(some_array) {
  var id = 0, it1;
  for (it1 in some_array) if(some_array[it1] != undefined) id = Math.max(id, parseInt(some_array[it1].id));
  return id+1;
};
eventRanking.getMaxId = function(some_array) {
  var id = 0, it1;
  for (it1 in some_array) if(some_array[it1] != undefined) id = Math.max(id, parseInt(some_array[it1].id));
  return id;
};
eventRanking.getNewPos = function(some_array) {
  var pos = 0, it1;
  for (it1 in some_array) if(some_array[it1] != undefined) pos = Math.max(pos, parseInt(some_array[it1].pos));
  return pos+1;
};
eventRanking.getMaxPos = function(some_array) {
  var pos = 0, it1;
  for (it1 in some_array) if(some_array[it1] != undefined) pos = Math.max(pos, parseInt(some_array[it1].pos));
  return pos;
};