// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

//Is it always going to be integers?

//R: return small integer in new array

//[5,6,7]--> [5,6,7]

//E: If we are given 1,2,3  should reutrn 1,2,3
//E: If we are given null  should reutrn "please send array"
//E: If we are given 2,3  should reutrn 2,3

//p: make a function to take in number size array
//fill with content


   //const arr = N => [ /* the numbers 0 to N-1 */ ];
   function arr(N){
    let arr = [];
    for (let i = 0; i < N; i++){
      arr.push(i)
    }
    return arr;
    }

    console.log(arr([4]), [0,1,2,3])