const arrayValues = [1, 2, 3, 5, 9, 10, 16, 20, 35, 36];
const target = 35;

function binarySearch(values, target) {
  let leftPointer = 0;
  let rightPointer = values.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while(values.length > middlePointer) {
    let element = values[middlePointer];

    if(target == element) return console.log(`${element} is in position ${middlePointer}`);
    
    if(element > target) {
        rightPointer = middlePointer - 1;
    } 
    
    if(element < target) {
        leftPointer = middlePointer + 1;
    }

    if(leftPointer > rightPointer) return console.log("Target not found!");

    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }
}

binarySearch(arrayValues, target);