// function getDigit(num, i) { // i - 0 if last digit
//   //                ignore negative sign if present
//   //                              create decimal ending on i
//   //     floor tenths after decimal points 
//   //                                                 get remainder
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function countDigitV1(num) {
  if (num === 0) return 1;

  let validated = num;

  const isNegativeNumberPassed = 0 < num;
  if (isNegativeNumberPassed) {
    validated = Math.abs(num);
  }

  // Math.log10(10) // 1
  // Math.log10(100) // 2
  // Math.log10(450) // 2.6532125137753435
  // Math.log10(1000) // 3
  const preCalculatedLengthAsDecimal = Math.log10(validated);
  const preCalculatedLength = Math.floor(preCalculatedLengthAsDecimal);
  const calculatedLength = preCalculatedLength + 1;

  return calculatedLength;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23,567,89,12234324,90])










