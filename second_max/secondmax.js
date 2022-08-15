/*
Second Maximum


Description
You are given three numbers stored in the variables with the following names,a,b,c

You have to find the second largest number out ofa,b,c

For example, consider the value stored ina = 3, b = 7, c = 5, then the required output will be c = 5


Input
The first and the only line of the input contains the values stored in a,b,c

Output
Find the second largest value out of a,b,c.

Sample Input 1 

3 7 5

Sample Output 1

5


Hint

In the sample test case, the value stored ina = 3, b = 7, c = 5.

Since, 5 is the second largest element, therefore, the output is 5.

*/


function secondMaximum(a, b, c) {
  // write code here
  if (a > b && a > c && b > c) {
    console.log(b);
  } else if (a > b && a > c && c > b) {
    console.log(c);
  } else if (b > a && b > c && a > c) {
    console.log(a);
  } else if (b > a && b > c && c > a) {
    console.log(c);
  } else if (c > a && c > b && a > b) {
    console.log(a);
  } else if (c > a && c > b && b > a) {
    console.log(b);
  }
}

secondMaximum(3,7,5);