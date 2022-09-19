/*
Kazama & Shinchan;

Description
Shinchan & Kazama are classmates at Futaba Kindergarten. 
I- chan likes shinchan, more than Kazama. Kazama wants to 
prove to I-chan that he is smarter than Shinchan, so he tries
 to boast his knowledge about numbers in front of her. He takes 
 an sorted array of N integers, and asks I-chan for a number K.
  If the number exists in the array, he will return the index
   where the number is present, else he returns the index where it
    would be if it were inserted in order. This task seems to be very
     difficult for Kazama, so he asks you for help. Help him, or else
      he will lose his friendship with I-chan.


      Input
      The first line contains N, the size of the array.
       Next line contains N space separated integers, indicating the
         values in the array.

        Next line contains K, the value I-chan gave to search.

      Constraints:
      1 <= N <= 10^4
   -10^4<= array[i] <= 10^4
  nums contains distinct values sorted in ascending order.
-10^4<= K <= 10^4

Output 
Print a single integer denoting the position of K in the array, 
if present, else indicating the position 
where it would be if inserted in sorted order.

Sample Input 1 
4
1 3 5 6
5 


Sample Output 1
2

Sample Input 2 
4
1 3 5 6
2

Sample Output 2
1


      */


function Kazama_Shinchan(n, arr, K) {
  for (var i = 0; i < n; i++) {
    if (arr[i] === K) {
      return i;
    } else if (arr[i] > K) {
      return i;
    }
  }
  return n;
}

function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  var K = +input[2];
  ans = Kazama_Shinchan(n, arr, K);
  console.log(ans);
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