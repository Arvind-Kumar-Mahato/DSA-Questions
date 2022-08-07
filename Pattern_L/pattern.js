/* 
Pattern of L

Description
You are given a number stored in a variable with the nameN

Print the pattern as shown below, according to the value stored in N

For example, consider the value stored inN = 5

Then, the required pattern will be as follows, which represents the letter L

*
*
*
*
* * * * *

Input
The first and the only line of the input contains the value N

Output
Print the pattern as shown in the problem statement

Sample Input 1 
4

Sample Output 1
*
*
*
* * * *

Hint
In the sample test case, the value stored inN = 4. Therefore, the required pattern will be as shown below

*
*
*
* * * *



*/

function patternOfL(N) {
  // Write code here
  for (i = 1; i <= N; i++) {
    output = "";
    for (j = 1; j <= N; j++) {
      if (i <= N - 1) {
        output = output + "*";
        break;
      } else {
        if (j == 1) {
          for (j = 1; j <= N; j++) {
            output = output + "*" + " ";
          }
        }
      }
    }
    console.log(output);
  }
}

patternOfL(4);