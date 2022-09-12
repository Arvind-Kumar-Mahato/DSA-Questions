/*
Conditional Matrix Sum

Description
You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.

Input
Input Format

First line contains n and m.

In the next n lines, there are m integers in each line which makes up elements of matrix.

Constraints

n<100

m<100

Output
Output Format

Output one number which is the sum of all such integers which are divisible by 3.

Sample Input 1 
2 3
3 1 8
2 6 0

Sample Output 1
9

Hint
The given 2 dimensional array has 2 rows and 3 columns.

There are two integers present in this array which are divisible by 3 (those are 3 and 6). So, the output is 9.



*/

function Conditional_Matrix_Sum(matrix, n, m) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (matrix[i][j] % 3 == 0) {
        sum = sum + matrix[i][j];
      }
    }
  }
  console.log(sum);
}

function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var [n, m] = input[0].split(" ").map(Number);
  var matrix = [];
  var line = 1;
  for (var i = 0; i < n; i++) {
    matrix.push(input[line++].split(" ").map(Number));
  }
  Conditional_Matrix_Sum(matrix, n, m);
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}