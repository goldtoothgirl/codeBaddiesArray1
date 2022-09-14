// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
Pattern
1
22
333
4444
55555
666666
7777777





function pattern(n) {
    var res = [], i;
    for(i = 1; i <= n; i++) {
      res.push(Array(i + 1).join(i));
    }
    return res.join('\n');
  }

  console.log( pattern(3), 1,22,333)