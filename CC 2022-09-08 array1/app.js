// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//Is it always going to be integers?

//R: return small integer in new array

//[5,6,7]--> [5]

//E: If we are given 1,2,3  should reutrn 1
//E: If we are given 4,5,6  should reutrn 4
//E: If we are given 2,3  should reutrn 2

//p: make and funcitons that takes in array
//map through arr and return the order via method

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
      
//     }
//   }


class SmallestIntegerFinder {
    args = [1, 3, 5, 7, 9, 11, 12];

    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
    }
    
    print(findSmallestInt)
    


  }


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return args.sort((a,b)=>a-b)[0];
//     }
//     console.log(SmallestIntegerFinder(1));
//   }

