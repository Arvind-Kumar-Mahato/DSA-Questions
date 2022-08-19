/*
Identify Prime

Description
You are given a number stored in a variable with the namenum

Check if the number is a prime number or not

If the value stored innum, is a prime number printYes, else printNo

Note : A prime number is a number, that is divisible by only 1 and the 

Input
The first and the only line of the input contains the value stored in num

Output
If the value stored innum, is a prime number printYes, else print No.

Sample Input 1 
13

Sample Output 1
Yes

Hint
In the sample test case, the value stored innum = 13. Since,13is a prime number, the output is Yes
*/

function identifyPrime(num) {
  // Write code here
  var flag = 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = 1;

      break;
    }
  }
  if (flag == 1) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}


identifyPrime(13);