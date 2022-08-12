/*
Perform Merging

Perform Merging
You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.
Note: You must not use sort() function in your entire code

Input
Input Format :
First line contains N which is the number of integers present in both the arrays.

Second line contains N sorted integers which are elements of first array.

Third line contains N sorted integers which are elements of second array.

Constraints :

N < 1000


Output
Output the array formed after merging elements such that it is sorted

Sample Input 1 
4
1 5 7 9
2 4 6 8


Sample Output 1
1 2 4 5 6 7 8 9


*/

function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var t = +input[0];
  var arr1 = input[1].split(" ").map(Number);
  var arr2 = input[2].split(" ").map(Number);

  var i = 0;
  var j = 0;
  var k = 0;
  var res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < arr1.length) {
    res[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    res[k++] = arr2[j++];
  }
  console.log(res.join(" "));
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