/*
Element in the middle

Description
Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.

Note: Left and right side elements can be equal to the required element. And extreme elements cannot be required element.

Input
Input Format

The first line contains an integer n denoting the size of the array and the second line contains n space separated array elements.

Constraints

n <= 1000

Ai <= 10000

Output
For each test case, in a new line print the required element. If no such element present in the array then print -1.

Sample Input 1 
5
4 3 6 7 8

Sample Output 1
6



*/


function Element_in_middle(n, a) {
  if (n == 1 || n == 2) {
    return -1;
  }

  var element = a[0],
    maxx = a[0],
    bit = -1,
    check = 0;
  var idx = -1;

  for (i = 1; i < n - 1; ) {
    if (a[i] < maxx && i < n - 1) {
      i++;
      bit = 0;
    } else {
      if (a[i] >= maxx) {
        element = a[i];
        idx = a[i];
        check = 1;
        maxx = a[i];
      }
      if (check == 1) {
        i++;
      }
      bit = 1;

      while (a[i] >= element && i < n - 1) {
        if (a[i] > maxx) {
          maxx = a[i];
        }
        i++;
      }
      check = 0;
    }
  }

  if (element <= a[n - 1] && bit == 1) {
    return idx;
  } else {
    return -1;
  }
}

function runProgram(input) {
  // Write code here

  var input = input.split("\n");
  var t = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(Element_in_middle(t, arr));
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