



function chunkArrayInGroups(arr, size) {

  const array = [];

  for (let i = 0; i < arr.length; i = i + size) { 

    array.push(arr.slice(i, i + size))
  };

  console.log(array);

};

console.log();
chunkArrayInGroups(["a", "b", "c", "d"], 2);// should return [["a", "b"], ["c", "d"]].

console.log();
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)// should return [[0, 1, 2], [3, 4, 5]].

console.log();
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].

console.log();
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)// should return [[0, 1, 2, 3], [4, 5]].

console.log();
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

console.log();
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


