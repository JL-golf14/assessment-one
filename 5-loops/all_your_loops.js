// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz+=1;
};
  // 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
while (i<3) {
  checkz -= 2 ;
  i++;

}
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];  // assigns 1 2 3 4 5 6 7 to the array numbers
var total = 0;   //assigns the total to 0
for (var i = 0; i < numbers.length; i++) {   //creates a for loop to run the .length of numbers so 7 times
  total += numbers[i];  //  changes total variable to add i's location in the array  each time through the loop so 1 + 2 + 3 +4 +5 +6 +
}// ends for loop             //
console.log(total);  //   logs the new total to the console
