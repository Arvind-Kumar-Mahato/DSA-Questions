/*
Negativity

Description
You are given an array of N integers.
Find the total count of negative integers present in the array.

Input
Input Format:

First line contains N integers
Second line contains N space separated integers which constitute the array.
Constraints:
1 <= N < =100

Output
Output the number of negative integers present in the array

Sample Input 1 
5
-3 0 -5 9 8

Sample Output 1
2

Hint

Negative integers present in array are-3, -5.
Total number of negative integers is 2. So we print2.

*/

function negativity(size, arr) {
  //write code here
  var count = 0;

  for (i = 0; i <= size; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}