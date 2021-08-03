/** product: calculate the product of an array of numbers. */

function product(numbers, index = 0) {
  if (index === numbers.length) return 1;
  return numbers[index] * product(numbers, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, currentLongest = 0) {
  if (index === words.length) return currentLongest;
  currentLongest = Math.max(words[index].length, currentLongest);
  return longest(words, index + 1, currentLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(string, index = 0, newString = "") {
  if (index >= string.length) return newString;
  newString += string[index];
  return everyOther(string, index + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(string, index = 0) {
  let leftIndex = index;
  let rightIndex = string.length - index - 1;
  if (leftIndex >= rightIndex) return true;
  if (string[leftIndex] !== string[rightIndex]) return false;
  return isPalindrome(string, index + 1);
}

/** findIndex: return the index of value in array (or -1 if value is not present). */

function findIndex(array, value, index = 0) {
  if (index === array.length) return -1;
  if (array[index] === value) return index;
  return findIndex(array, value, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function reverseString(string, index = 0, newString = "") {
  if (newString.length === string.length) return newString;
  newString += string[string.length - 1 - index];
  return reverseString(string, index + 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArray.push(obj[key]);
    if (typeof obj[key] === "object") stringArray.push(...gatherStrings(obj[key]));
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if value is not present). */

function binarySearch(array, value, left = 0, right = array.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (array[middle] === value) {
    return middle;
  }
  if (array[middle] > value) {
    return binarySearch(array, value, left, middle - 1);
  }
  return binarySearch(array, value, middle + 1, right);
}
